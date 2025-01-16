// 'use client';
// import React, { useEffect, useState, useRef } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import axios from 'axios';

// // Fix Leaflet icon issue
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//     iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
//     iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
//     shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
// });

// const MapView = ({ projects }) => {
//     const [projectLocations, setProjectLocations] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [apiLimitReached, setApiLimitReached] = useState(false); 
//     const fetchedAddresses = useRef(new Map()); 

//     const positionStackApiKey = '0fbee4d9b7ee1c7e572a0f8dab686b81'; 
//     const defaultPosition = [17.385044, 78.486671]; 

//     const fetchCoordinates = async (address) => {
//         if (fetchedAddresses.current.has(address)) {
//             return fetchedAddresses.current.get(address);
//         }

//         try {
//             const response = await axios.get(`https://api.positionstack.com/v1/forward`, {
//                 params: {
//                     access_key: positionStackApiKey,
//                     query: address,
//                     limit: 1
//                 }
//             });
//             const data = response.data.data;
//             if (data && data.length > 0) {
//                 const coords = { lat: data[0].latitude, lon: data[0].longitude };
//                 fetchedAddresses.current.set(address, coords);
//                 return coords;
//             } else {
//                 console.warn(`No coordinates found for address: ${address}`);
//                 return null;
//             }
//         } catch (error) {
//             console.error(`Error fetching coordinates for ${address}:`, error);
//             if (error.response && error.response.status === 429) { 
//                 setApiLimitReached(true); 
//                 console.warn("PositionStack API limit reached. Please try again later.");
//                 return null; 
//             }
//             return null; 
//         }
//     };

//     useEffect(() => {
//         const processProjects = async () => {
//             const uniqueProjects = [...new Set(projects.map(p => p.location))];

//             const updatedProjects = await Promise.all(
//                 uniqueProjects.map(async (location) => {
//                     const coords = await fetchCoordinates(location);
//                     if (coords) {
//                         return projects.find(p => p.location === location) || { location, ...coords };
//                     }
//                     return null; 
//                 })
//             );
//             setProjectLocations(updatedProjects.filter(Boolean));
//             setLoading(false);
//         };

//         if (projects && projects.length > 0) {
//             processProjects();
//         } else {
//             setLoading(false);
//         }
//     }, [projects]);

//     if (loading) return <p className='text-center'>Loading map...</p>;
//     if (apiLimitReached) return <p className='text-center'>PositionStack API limit reached. Please try again later.</p>; 

//     return (
//         <MapContainer center={defaultPosition} zoom={12} style={{ height: '300px', width: '50%', justifyContent: "center", alignItems: "center", display: "flex", margin: "auto" }}>
//             <TileLayer
//                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                 attribution="© OpenStreetMap contributors"
//             />

//             {projectLocations.map((project, index) => (
//                 project.lat && project.lon ? (
//                     <Marker key={index} position={[project.lat, project.lon]}>
//                         <Popup>
//                             <div className="text-center">
//                                 <strong>{project.projectName}</strong><br />
//                                 <span>{project.location}</span><br />
//                                 <span>{project.priceRange}</span>
//                             </div>
//                         </Popup>
//                     </Marker>
//                 ) : "Positionstack api limit is reached" 
//             ))}
//         </MapContainer>
//     );
// };

// export default MapView;
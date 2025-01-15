import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapView = ({ projects }) => {
    const defaultPosition = [17.385044, 78.486671];
    return (
        <MapContainer center={defaultPosition} zoom={12} style={{ height: '500px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="© OpenStreetMap contributors"
            />
            {projects.map((project, index) => (
                <Marker key={index} position={defaultPosition}>
                    <Popup>
                        <strong>{project.projectName}</strong><br />
                        {project.location}<br />
                        {project.priceRange}
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    )
}

export default MapView
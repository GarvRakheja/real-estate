'use client';
import MapView from '@/components/MapView';
import ProjectCard from '@/components/ProjectCard';
import { useGetProjectsByCityQuery } from '@/redux/projectApiSlice';
import { useParams } from 'next/navigation';

export default function CityPage() {
  const { cityName } = useParams();
  const { data: projects, error, isLoading } = useGetProjectsByCityQuery(cityName);
  console.log("projects===>", projects)

  if (isLoading) return <div className="text-center py-10">Loading projects...</div>;
  if (error) return <div className="text-center py-10 text-red-500">Error loading projects</div>;

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-2/3 p-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      <div className="w-full md:w-1/3 p-4">
        <MapView projects={projects} />
      </div>
    </div>
  );
}

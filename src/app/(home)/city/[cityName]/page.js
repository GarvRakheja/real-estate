'use client';
import MapView from '@/components/MapView';
import ProjectCard from '@/components/ProjectCard';
import { useGetProjectsByCityQuery } from '@/redux/projectApiSlice';
import { useParams } from 'next/navigation';
import { ClipLoader } from 'react-spinners';

export default function CityPage() {
  const { cityName } = useParams();
  const { data: projects, error, isLoading } = useGetProjectsByCityQuery(cityName);

  if (error) return <div className="text-center py-10 text-red-500">Error loading projects</div>;

  return (
    <div className="p-4">
      <MapView projects={projects}/>
      {
        isLoading ? (
          <div className="text-center py-10">
            <ClipLoader
              loading={isLoading}
              size={50}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        ) : (
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects?.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
        )
      }

    </div>
  );
}

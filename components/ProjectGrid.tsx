'use client';

import { useInView } from '@/hooks/useInView';
import { getAllProjects } from '@/lib/projects';
import ProjectCard from './ProjectCard';

export default function ProjectGrid() {
  const projects = getAllProjects();
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.05 });

  return (
    <section
      id="projects"
      ref={ref}
      className={`py-20 bg-surface fade-up ${inView ? 'in-view' : ''}`}
    >
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 fade-up fade-up-delay-1 ${inView ? 'in-view' : ''}`}>
          <h2 className="text-3xl font-bold text-text mb-4">Projects</h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            A selection of my recent work showcasing different technologies and problem-solving approaches.
          </p>
        </div>

        <div className="flex flex-col">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

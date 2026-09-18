import { Project } from '@/lib/projects';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="border-b border-border py-8 group cursor-default transition-colors duration-200 hover:bg-surface/40 -mx-4 px-4 rounded-lg">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">

        {/* Left: main content */}
        <div className="flex-1 min-w-0 transition-transform duration-200 group-hover:translate-x-1">
          {/* Tech stack labels */}
          <div className="flex flex-wrap gap-2 mb-3">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs font-medium text-accent uppercase tracking-wider"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-text mb-2 transition-colors duration-200 group-hover:text-accent-hover">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-text-muted leading-relaxed max-w-2xl">
            {project.description}
          </p>
        </div>

        {/* Right: action buttons */}
        <div className="flex flex-row sm:flex-col items-start sm:items-end gap-3 shrink-0 pt-1">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover transition-colors duration-200"
            aria-label={`View repository for ${project.title}`}
          >
            <Github size={15} />
            View Repo
          </a>

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-text-muted hover:text-accent-hover transition-colors duration-200"
              aria-label={`View live demo for ${project.title}`}
            >
              <ExternalLink size={15} />
              Live Demo
            </a>
          )}
        </div>

      </div>
    </div>
  );
}

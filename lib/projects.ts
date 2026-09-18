import projectData from '../content/projects.json';

export interface Project {
  slug: string;
  title: string;
  description: string;
  techStack: string[];
  repoUrl: string;
  demoUrl: string | null;
  thumbnail: string;
  featured: boolean;
}

export function getAllProjects(): Project[] {
  return projectData as Project[];
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter(project => project.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getAllProjects().find(project => project.slug === slug);
}

export function getProjectSlugs(): string[] {
  return getAllProjects().map(project => project.slug);
}
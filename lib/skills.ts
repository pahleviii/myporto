export interface SkillGroup {
  category: string;
  items: string[];
}

const skills: SkillGroup[] = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'Python', 'Firebase', 'MongoDB', 'PostgreSQL'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Figma', 'Vercel', 'Docker'],
  },
  {
    category: 'Other',
    items: ['Responsive Design', 'SEO', 'Testing', 'CI/CD', 'Agile/Scrum', 'UI/UX'],
  },
];

export function getAllSkills(): SkillGroup[] {
  return skills;
}
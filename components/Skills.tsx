'use client';

import { useInView } from '@/hooks/useInView';
import { getAllSkills } from '@/lib/skills';

export default function Skills() {
  const skills = getAllSkills();
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      id="skills"
      ref={ref}
      className={`py-20 fade-up ${inView ? 'in-view' : ''}`}
    >
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-text mb-3">Skills &amp; Technologies</h2>
          <p className="text-text-muted max-w-xl">
            Technologies I work with, from building interfaces to shipping products.
          </p>
        </div>

        {/* Skill categories */}
        <div className="space-y-10">
          {skills.map((group, i) => (
            <div
              key={group.category}
              className={`fade-up ${inView ? 'in-view' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Category label */}
              <p className="text-xs font-medium text-accent uppercase tracking-widest mb-4">
                {group.category}
              </p>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-surface border border-border rounded-full text-sm text-text-muted hover:border-accent hover:text-text transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
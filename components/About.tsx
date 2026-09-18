'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useInView } from '@/hooks/useInView';

function CountUp({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.5 });
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;

    let start = 0;
    const duration = 1200;
    const step = duration / target;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= target) clearInterval(timer);
    }, step);

    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <div ref={ref} className="text-2xl font-bold text-text">
      {count}{suffix}
    </div>
  );
}

export default function About() {
  const [sectionRef, sectionInView] = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`py-20 bg-surface fade-up ${sectionInView ? 'in-view' : ''}`}
    >
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">

          {/* Profile photo -- small circle, centered */}
          <div className={`flex justify-start mb-8 fade-up ${sectionInView ? 'in-view' : ''}`}>
            <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-border">
              <Image
                src="/images/IMG-20241123-WA0081.jpg"
                alt="Reza Pahlevi"
                fill
                className="object-cover"
                sizes="96px"
                priority
              />
            </div>
          </div>

          {/* Text content */}
          <div className={`fade-up fade-up-delay-1 ${sectionInView ? 'in-view' : ''}`}>
            <h2 className="text-3xl font-bold text-text mb-6">About Me</h2>
            <div className="space-y-4 text-text-muted leading-relaxed">
              <p>
                Hi, I am Reza Pahlevi &mdash; a fresh graduate in Informatics Engineering
                from Universitas Negeri Surabaya with a strong interest in web
                development and UI/UX design.
              </p>
              <p>
                I enjoy building web applications that are not only functional but
                also intuitive and pleasant to use. I pay close attention to detail,
                both in writing clean code and in crafting interfaces that feel right.
              </p>
              <p>
                I am currently looking for opportunities where I can grow, contribute,
                and keep learning alongside a team that cares about building good
                products.
              </p>
            </div>
          </div>

          {/* Stats row */}
          <div className={`mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 fade-up fade-up-delay-2 ${sectionInView ? 'in-view' : ''}`}>
            <div className="border border-border rounded-lg p-4">
              <div className="text-2xl font-bold text-text">S1</div>
              <div className="text-text-muted text-sm">Teknik Informatika UNESA</div>
            </div>
            <div className="border border-border rounded-lg p-4">
              <CountUp target={3} suffix="+" />
              <div className="text-text-muted text-sm">Projects Completed</div>
            </div>
            <div className="border border-border rounded-lg p-4">
              <div className="text-2xl font-bold text-text">Web</div>
              <div className="text-text-muted text-sm">Development Focus</div>
            </div>
            <div className="border border-border rounded-lg p-4">
              <div className="text-2xl font-bold text-text">Open</div>
              <div className="text-text-muted text-sm">For Opportunities</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
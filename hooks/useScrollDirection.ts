'use client';

import { useEffect, useState } from 'react';

type ScrollDirection = 'up' | 'down' | 'idle';

export function useScrollDirection(threshold = 10): ScrollDirection {
  const [direction, setDirection] = useState<ScrollDirection>('idle');
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const diff = currentY - lastY;

      if (Math.abs(diff) < threshold) return;

      setDirection(diff > 0 ? 'down' : 'up');
      setLastY(currentY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastY, threshold]);

  return direction;
}
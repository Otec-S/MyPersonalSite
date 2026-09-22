import { useEffect, useRef, useState } from "react";

interface UseCountUpOptions {
  duration?: number;
  threshold?: number;
}

interface UseCountUpResult {
  ref: React.RefObject<HTMLDivElement>;
  value: number;
}

const easeOutCubic = (t: number): number => 1 - Math.pow(1 - t, 3);

export const useCountUp = (
  target: number,
  { duration = 1200, threshold = 0.3 }: UseCountUpOptions = {},
): UseCountUpResult => {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setValue(target);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        observer.unobserve(node);

        const start = performance.now();

        const tick = (now: number): void => {
          const progress = Math.min((now - start) / duration, 1);
          setValue(Math.round(target * easeOutCubic(progress)));

          if (progress < 1) {
            requestAnimationFrame(tick);
          }
        };

        requestAnimationFrame(tick);
      },
      { threshold },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [target, duration, threshold]);

  return { ref, value };
};

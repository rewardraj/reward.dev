import { useEffect, useRef } from 'react';

export const useSection = (id: string) => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
            window.history.pushState(null, '', `#${id}`);
        }
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [id]);

  return ref;
};
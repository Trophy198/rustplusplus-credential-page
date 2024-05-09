import { useEffect, RefObject } from 'react';

const useIntersectionObserver = (
  elements: RefObject<HTMLElement>[],
  callback: (entry: IntersectionObserverEntry, index: number) => void,
  options?: IntersectionObserverInit,
) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = elements.findIndex((element) => element.current === entry.target);
        if (index !== -1) {
          callback(entry, index);
        }
      });
    }, options);

    elements.forEach((element) => {
      if (element.current) {
        observer.observe(element.current);
      }
    });

    return () => {
      elements.forEach((element) => {
        if (element.current) {
          observer.unobserve(element.current);
        }
      });
    };
  }, [elements, callback, options]);
};

export default useIntersectionObserver;

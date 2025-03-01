import { useEffect, useState, useRef } from "react";

interface IntersectionObserverProps {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
}

const useIntersectionObserver = ({
  threshold = 0.1,
  root = null,
  rootMargin = "0px",
}: IntersectionObserverProps = {}) => {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
  const [wasInView, setWasInView] = useState<boolean>(false);
  const targetRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting) setWasInView(true);
      },
      { threshold, root, rootMargin }
    );

    observer.observe(target);

    return () => {
      observer.unobserve(target);
      observer.disconnect();
    };
  }, [threshold, root, rootMargin]);

  return { targetRef, isIntersecting, wasInView };
};

export default useIntersectionObserver;

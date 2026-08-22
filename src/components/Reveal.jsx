"use client";

import { useEffect, useRef, useState } from "react";

export default function Reveal({ children, className = "", delay = 0 }) {
  const elementRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return <div ref={elementRef} style={{ transitionDelay: `${delay}ms` }} className={`transition-[opacity,transform] duration-700 ease-out motion-reduce:!transform-none motion-reduce:!opacity-100 ${visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"} ${className}`}>{children}</div>;
}
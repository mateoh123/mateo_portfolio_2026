"use client";
import { useEffect, useRef, useState } from "react";

type ScrollNavProps = {
  sections: string[];
  activeColor?: string;
};

export default function ScrollNav({
  sections,
  activeColor = "text-green-950",
}: ScrollNavProps) {
  const [active, setActive] = useState(sections[0]);
  const observersRef = useRef<IntersectionObserver[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      observersRef.current = sections.map((section) => {
        const el = document.getElementById(
          section.toLowerCase().replace(/\s+/g, "-"),
        );
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) setActive(section);
          },
          { threshold: 0, rootMargin: "0px 0px -95% 0px" },
        );
        if (el) observer.observe(el);
        return observer;
      });
    }, 500);

    return () => {
      clearTimeout(timer);
      observersRef.current.forEach((o) => o.disconnect());
    };
  }, [sections]);

  const links = sections.map((section) => (
    <a
      key={section}
      href={`#${section.toLowerCase().replace(/\s+/g, "-")}`}
      className={`transition-all duration-200 ${
        active === section
          ? `${activeColor} scale-y-[3] font-bold`
          : "text-black opacity-40 hover:opacity-100"
      }`}
    >
      {section}
    </a>
  ));

  return (
    <>
      <div className="flex md:hidden items-center justify-start overflow-x-auto whitespace-nowrap flex-row gap-4 px-2 py-4 sticky top-0 bg-white z-50 border-b-4 border-black col-span-full">
        {links}
      </div>
      <div className="hidden md:flex flex-col items-end justify-start sticky top-[3vw] h-fit pt-[3vw] pl-[2vw] gap-5 text-[1.5vw] md:text-[2.5vw] lg:text-[1.8vw]">
        {links}
      </div>
    </>
  );
}

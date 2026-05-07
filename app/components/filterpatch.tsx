"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

type FilterPatchProps = {
  categories?: string[];
  activeFilter: string;
  setActiveFilter: (category: string) => void;
};

export default function FilterPatch({
  categories = [],
  activeFilter,
  setActiveFilter,
}: FilterPatchProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      {/* Patch trigger */}
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="absolute top-1/2 -translate-x-[265%] translate-y-[160%] w-[8vw] z-[15] group cursor-pointer"
      >
        <Image
          src="/assets/filterpatchstatic.png"
          alt="filter patch"
          width={1000}
          height={1000}
          className={`w-full h-auto pointer-events-none transition ease-in-out
            ${isOpen ? "opacity-0" : "opacity-100 animate-pulse-glow group-hover:opacity-0"}`}
          priority
        />
        <Image
          src="/assets/filterpatchactive.png"
          alt="filter patch active"
          width={1000}
          height={1000}
          className={`absolute inset-0 w-full h-auto pointer-events-none transition ease-in-out
            ${isOpen ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
          priority
        />
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/80 z-40"
        />
      )}

      {/* Pullout Sidebar */}
      <aside
        className={`
          fixed
          top-0
          left-0
          h-screen
          w-[85%]
          max-w-[350px]
          bg-white
          z-50
          shadow-2xl
          transition-transform
          duration-300
          ease-in-out
          border-8
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex flex-col gap-[3vw] pt-8 pl-4 text-[8vw] xs:text-[5vw] ipadSM:text-[3vw] ipadLG:text-[2vw]">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveFilter(category);
              }}
              className={`
                text-left overflow-y-auto ml-1 text-black font-bold transition-all duration-200
                ${
                  activeFilter === category
                    ? "font-bold translate-x-2 text-red-600 scale-y-[2]"
                    : "opacity-50 hover:opacity-100 hover:translate-x-1"
                }
              `}
            >
              {activeFilter === category && (
                <span className="mr-2 text-red-600"></span>
              )}
              {category}
            </button>
          ))}
        </div>
        {isOpen && (
          <Image
            src="/assets/filterhand.png"
            alt="filter hand"
            width={1000}
            height={1000}
            className="hidden desktopSM:block desktopSM:absolute top-1/2 translate-x-[39%] translate-y-[10%] w-[95vw] h-auto z-50"
            priority
          />
        )}
      </aside>
    </>
  );
}

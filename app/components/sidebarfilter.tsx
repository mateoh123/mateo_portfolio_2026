"use client";

import { useState, useEffect } from "react";

type MobileFilterSidebarProps = {
  categories: string[];
  activeFilter: string;
  setActiveFilter: (category: string) => void;
};

export default function MobileFilterSidebar({
  categories,
  activeFilter,
  setActiveFilter,
}: MobileFilterSidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      {/* Sideways "Filters" trigger button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed left-0 top-1/12 -translate-y-1/12 z-50 bg-white text-black text-sm font-medium tracking-widest uppercase py-2 "
        style={{
          writingMode: "vertical-rl",
          transform: "translateY(180%) rotate(360deg)",
        }}
      >
        <h1 className="scale-x-[3] font-[Impact]">Filters</h1>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 transition-opacity duration-300"
        />
      )}

      {/* Pullout Sidebar */}
      <aside
        className={`
          fixed
          top-0
          left-0
          h-screen
          w-[75%]
          max-w-[320px]
          bg-white
          z-50
          shadow-2xl
          transition-transform
          duration-300
          ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
     

        <div className="flex flex-col gap-3 text-[8vw] xs:text-[5vw] ipadSM:text-[4vw] ipadLG:text-[3vw] ">
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
      </aside>
    </>
  );
}

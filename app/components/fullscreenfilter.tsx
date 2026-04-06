"use client";

type DesktopFilterProps = {
  categories: string[];
  activeFilter: string;
  setActiveFilter: (category: string) => void;
};

export default function DesktopFilter({
  categories,
  activeFilter,
  setActiveFilter,
}: DesktopFilterProps) {
  return (
    <div className="flex flex-col gap-3 text-[8vw] xs:text-[5vw] ipadSM:text-[4vw] ipadLG:text-[3vw] md:text-[1.5vw]">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveFilter(category)}
          className={`
            items-end text-right mr-[1vw] text-black cursor-pointer font-bold transition-all duration-200
            ${
              activeFilter === category
                ? "-translate-x-2 text-red-600 scale-y-[2]"
                : "opacity-50 hover:opacity-100 hover:translate-x-1"
            }
          `}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

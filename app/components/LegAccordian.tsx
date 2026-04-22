"use client";

import { useState } from "react";
import Image from "next/image";

type LegAccordionProps = {
  topLegSrc: string;
  bottomLegSrc: string;
  children?: React.ReactNode;
};

export default function LegAccordion({
  topLegSrc,
  bottomLegSrc,
  children,
}: LegAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full select-none z-50">
      {/* Top leg — stays fixed */}
      <div
        className="w-full cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
        style={{
          animation: isOpen ? "none" : "legPulse 2s ease-in-out infinite",
        }}
      >
        <Image
          src={topLegSrc}
          alt="Top leg"
          width={1200}
          height={300}
          className="w-full object-cover "
        />
      </div>

      {/* Content revealed between the legs */}
      <div
        className="w-full grid transition-all duration-500 ease-in-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="overflow-hidden">
          <div className="px-8 py-10">{children}</div>
        </div>
      </div>

      {/* Bottom leg — slides down */}
      <div
        className="w-full transition-transform duration-500 ease-in-out cursor-pointer"
        style={{
          transform: isOpen ? "translateY(1%)" : "translateY(0)",
          animation: isOpen ? "none" : "legPulse 2s ease-in-out infinite",
        }}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Image
          src={bottomLegSrc}
          alt="Bottom leg"
          width={1200}
          height={300}
          className="w-full object-cover -mt-6 "
        />
      </div>
    </div>
  );
}

"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import workHand from "../assets/mainworkhand.png";
import fingerLeft from "../assets/mainworkfingerleft.png";
import fingerRight from "../assets/mainworkfingerright.png";
import handSleeve from "../assets/handsleeve.png";
import WorkGrid from "../components/workgrid";
import MobileFilterSidebar from "../components/sidebarfilter";
import DesktopFilter from "../components/fullscreenfilter";

const projects = [
  {
    title: "Virtual Reality Tour Training",
    category: "UX / VR",
    image: "/projects/vr-project.jpg",
  },
  {
    title: "Climate Storytelling Campaign",
    category: "Design / Sustainability",
    image: "/projects/climate-project.jpg",
  },
  {
    title: "Student Media Photography",
    category: "Photography",
    image: "/projects/photo-project.jpg",
  },
  {
    title: "Social Media Marketing Strategy",
    category: "Marketing",
    image: "/projects/marketing-project.jpg",
  },
  {
    title: "qw Media Photography",
    category: "Photography",
    image: "/projects/photo-project.jpg",
  },
  {
    title: "Sociaqwl Media Marketing Strategy",
    category: "Marketing",
    image: "/projects/marketing-project.jpg",
  },
];

export default function WorkPage() {
  const categories = [
    "All",
    "UX / UI",
    "Photography",
    "Marketing",
    "Web",
    "VR",
    "Data",
  ];

  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <>
      <div className="md:hidden">
        <MobileFilterSidebar
          categories={categories}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />

        <button
          className="fixed left-0 top-1/12 -translate-y-1/2 z-50 bg-red-600 text-white text-sm font-medium tracking-widest uppercase py-2 "
          style={{
            writingMode: "vertical-rl",
            transform: "translateY(50%) rotate(360deg)",
          }}
        >
          <Link href="/contact">
            <h1 className="scale-x-[3]">Contact</h1>
          </Link>
        </button>
      </div>
      <main className="relative min-h-screen overflow-hidden grid grid-cols-1 md:grid-cols-[1fr_1.1fr_1fr] lg:grid-cols-[1fr_1.1fr_1fr] bg-white ">
        <div className="hidden md:block md:flex md:flex-col md:gap-15">
          <h1 className="origin-top text-red-600 mt-[5vw] ml-[0.5vw] mobile:origin-center text-[19vw] ipad:text-[15vw] md:text-[6vw] font-archivo text-black font-bold text-left scale-y-[3] leading-[0.8]">
            Work
          </h1>
          <div className="flex flex-col gap-3 text-[8vw] xs:text-[5vw] ipadSM:text-[4vw] ipadLG:text-[3vw] md:text-[2vw]">
            <Link
              href="/contact"
              className="items-end scale-y-[2] text-left ml-[1vw] text-black font-bold transition-all duration-200 opacity-50 hover:opacity-100 hover:translate-x-1"
            >
              <h1>Contact</h1>
            </Link>
          </div>
        </div>

        {/* Middle column */}
        <div className="overflow-hidden">
          {/* 1. Hand Sleeve — behind grid */}
          <Image
            src={handSleeve}
            alt="hand sleeve"
            className="absolute top-1/2 -translate-x-[102%] -translate-y-[10%] w-[55vw] h-auto z-[5]"
            priority
          />
          {/* 1. Hand — behind grid */}
          <Image
            src={workHand}
            alt="waving hand"
            className="absolute  top-1/2 -translate-x-[22%] -translate-y-[40%] w-[55vw] h-auto z-0"
            priority
          />

          {/* 2. Grid — in front of hand */}
          <div className="overflow-y-scroll h-screen relative z-10 bg-white">
            <WorkGrid projects={filteredProjects} />
          </div>

          {/* 3. Left finger — in front of grid */}
          <Image
            src={fingerLeft}
            alt="left finger"
            className="md:absolute left-[-18%] w-[33vw] md:w-[15vw] bottom-[10%] md:bottom-[57%] md:left-[27%] h-auto z-20"
            priority
          />

          {/* 4. Right fingertip — in front of grid */}
          <Image
            src={fingerRight}
            alt="right finger"
            className="absolute w-[30vw] right-[-15%] md:right-[27%] md:bottom-[42%] md:w-[8vw] h-auto z-20"
            priority
          />
        </div>

        <div className="hidden md:flex flex-col items-end text-right gap-8">
          <h1 className="origin-top mt-[2vw] mr-[0.5vw] mobile:origin-center text-[19vw] ipad:text-[15vw] md:text-[2vw] font-archivo text-black font-bold text-left scale-y-[3] leading-[0.8]">
            Filters
          </h1>
          <DesktopFilter
            categories={categories}
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />
        </div>
      </main>
    </>
  );
}

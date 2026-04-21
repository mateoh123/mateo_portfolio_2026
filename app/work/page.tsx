"use client";
import { useState } from "react";
import Image from "next/image";
import WorkGrid from "../components/workgrid";
import DesktopFilter from "../components/fullscreenfilter";
import MobileSidebar from "../components/mobilesidebar";
import NameHeading from "../components/nameheading";
import ContactPatch from "../components/contactpatch";

const projects = [
  {
    title: "Animated Album Covers",
    category: "Creative Media",
    image: "/assets/Work_Assets/mfitkcc6amjfxxyymjv8.avif",
    link: "/aac",
  },
  {
    title: "NYU Office of Sustainability",
    category: "Digital Marketing",
    image: "/assets/Work_Assets/mfitkcc6amjfxxyymjv8.avif",
    link: "/oosgd",
  },
  {
    title: "Digital Media Intellect",
    category: "Digital Marketing",
    image: "/assets/Work_Assets/huxourc1ps5fgo6twlxc.avif",
    link: "/dmi",
  },
  {
    title: "On Trail With",
    category: "Web Development",
    image: "/projects/photo-project.jpg",
    link: "/otw",
  },
  {
    title: "Ajihome",
    category: "Web Development",
    image: "/projects/marketing-project.jpg",
    link: "/aj",
  },
  {
    title: "NYU Admissions Ambassadors",
    category: "Web Development",
    image: "/projects/photo-project.jpg",
    link: "/AA",
  },
  {
    title: "What IDM Job Are You? — Interactive Snapchat Campaign",
    category: "Digital Marketing/VR Development",
    image: "/projects/marketing-project.jpg",
    link: "/DMIXAR",
  },
  {
    title: "Clean Your Hard Drive",
    category: "Digital Marketing",
    image: "/projects/marketing-project.jpg",
    link: "/cyh",
  },
  {
    title: "Valorax: Your Hero",
    category: "VR Development",
    image: "/projects/marketing-project.jpg",
    link: "/vyh",
  },
  {
    title: "20 To 10: AR Experience",
    category: "VR Development",
    image: "/projects/marketing-project.jpg",
    link: "/TTTAR",
  },
  {
    title: "WIRED: AR Cover",
    category: "VR Development",
    image: "/projects/marketing-project.jpg",
    link: "/WAR",
  },
  {
    title: "VR Axe Throwing",
    category: "VR Development",
    image: "/projects/marketing-project.jpg",
    link: "/AXE",
  },
];

export default function WorkPage() {
  const categories = [
    "All",
    "Web Development",
    "Digital Marketing",
    "Photography",
    "VR Development",
    "Creative Medias",
  ];

  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <>
      <MobileSidebar
        categories={categories}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      <main className="relative min-h-screen  desktopSM:overflow-hidden gap-[1vw] grid grid-cols-1 desktopSM:grid-cols-[1fr_1.3fr] bg-white">
        <div className="hidden desktopSM:block desktopSM:flex flex-row desktopSM:flex-col ">
          {/* Leg Boots */}
          {/* <NameHeading names={["Mateo", "Hernandez"]} /> */}
        </div>

        <div className=" overflow-hidden">
          {/* <DesktopFilter
            categories={categories}
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          /> */}
          {/* 1. Hand Sleeve — behind grid */}
          <Image
            src="/assets/handsleeveV2.png"
            alt="hand sleeve"
            width={1000}
            height={1000}
            className="hidden desktopSM:block desktopSM:absolute top-1/2 -translate-x-[107%] -translate-y-[7%] w-[55vw] h-auto z-[5]"
            priority
          />
          {/* 2. Sleeve Patch  — in front of Sleeve */}
          <ContactPatch />
          {/* 2. Hand — behind grid */}
          <Image
            src="/assets/mainworkhand.png"
            alt="waving hand"
            width={1000}
            height={1000}
            className="hidden desktopSM:block desktopSM:absolute top-1/2 -translate-x-[25%] -translate-y-[39%] w-[55vw] h-auto z-0"
            priority
          />
          {/* 5. Thumb — in front of grid */}
          <Image
            alt="thumb"
            width={1000}
            height={1000}
            className="hidden desktopSM:block desktopSM:absolute w-[15vw] h-auto z-20 top-1/2 -translate-y-[139%] left-[39%]"
            src="/assets/mainworkfingerleft.png"
          />
          {/* 3. Grid — in front of hand */}
          <div className="overflow-y-scroll h-screen relative z-10 bg-white pointer-events-none">
            <div className="pointer-events-auto">
              <WorkGrid projects={filteredProjects} />
            </div>
          </div>
          {/* 5. Right fingertip — in front of grid */}
          <Image
            src="/assets/mainworkfingerright.png"
            alt="right finger"
            width={1000}
            height={1000}
            className="hidden desktopSM:block desktopSM:absolute w-[30vw] right-[-15%] desktopSM::-right-[4%] desktopSM::bottom-[42%] desktopSM::w-[8vw] h-auto z-20"
            priority
          />
        </div>
        <div className="desktopSM:hidden fixed bottom-0 left-0 w-full z-50 flex flex-row items-end bg-white">
          <Image
            src="/assets/legsBoots.png"
            alt="Leg Boots"
            width={1000}
            height={1000}
            className="mr-auto scale-y-[-1] w-[32vw] h-auto"
            priority
          />
          <NameHeading names={["Mateo", "Hernandez"]} />
        </div>
      </main>
    </>
  );
}

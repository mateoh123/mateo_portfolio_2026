"use client";
import { useState } from "react";
import Image from "next/image";
import WorkGrid from "./components/workgrid";
import MobileSidebar from "./components/mobilesidebar";
import NameHeading from "./components/nameheading";
import ContactPatch from "./components/contactpatch";
import FilterPatch from "./components/filterpatch";
import SocialLinks from "./components/sociallinks";

const projects = [
  {
    title: "Animated Album Covers",
    category: ["Creative Medias", "VR Development"],
    image: "/assets/Work_Assets/AAACoverImage.png",
    hoverVideo: "/assets/Work_Assets/AAACoverVideo.mp4",
    link: "/aac",
  },
  {
    title: "NYU Office of Sustainability",
    category: ["Digital Marketing"],
    image: "/assets/Work_Assets/OOSCoverImage.png",
    hoverVideo: "/assets/Work_Assets/OOSCoverVideo.mp4",
    link: "/oosgd",
  },
  {
    title: "Ajihome",
    category: ["Web Development"],
    image: "/assets/Work_Assets/AJCoverImage1.png",
    hoverImage: "/assets/Work_Assets/AJCoverImage2.png",
    link: "/aj",
  },
  {
    title: "On Trail With",
    category: ["Web Development"],
    image: "/assets/Work_Assets/OTWCoverImage2.png",
    hoverImage: "/assets/Work_Assets/OTWCoverImage.avif",
    link: "/otw",
  },
  {
    title: "Interactive Snapchat Campaign",
    category: ["VR Development", "Creative Medias", "Digital Marketing"],
    image: "/assets/Work_Assets/IDMXARCoverImage.png",
    hoverVideo: "/assets/Work_Assets/IDMXARCoverVideo.mp4",
    link: "/DMIXAR",
  },
  {
    title: "WIRED: AR Cover",
    category: ["VR Development"],
    image: "/assets/Work_Assets/WIREDCoverImage1.jpg",
    hoverVideo: "/assets/Work_Assets/WIREDCoverVideo.mov",
    link: "/WAR",
  },
  {
    title: "Digital Media Intellect",
    category: ["Digital Marketing"],
    image: "/assets/Work_Assets/DMICoverImage.png",
    hoverVideo: "/assets/Work_Assets/DMICoverVideo.mp4",
    link: "/dmi",
  },
  {
    title: "Clean Your Hard Drive",
    category: ["Creative Medias", "Digital Marketing"],
    image: "/assets/Work_Assets/CYHDCoverImage.png",
    hoverVideo: "/assets/Work_Assets/CYDHCoverVideo.mp4",
    link: "/cyh",
  },
  {
    title: "NYU Admissions Ambassadors",
    category: ["Web Development"],
    image: "/assets/Work_Assets/AACoverImage1.png",
    hoverImage: "/assets/Work_Assets/AACoverImage2.png",
    link: "/AA",
  },
  {
    title: "VR Axe Throwing",
    category: ["VR Development"],
    image: "/assets/Work_Assets/VRAXECoverImage.png",
    hoverVideo: "/assets/Work_Assets/AXEARCoverVideo.mov",
    link: "/AXE",
  },
  {
    title: "20 To 10: AR Experience",
    category: ["Photography", "Creative Medias", "VR Development"],
    image: "/assets/Work_Assets/TTTARCoverImage2.jpg",
    hoverImage: "/assets/Work_Assets/TTTARCoverImage1.jpg",
    link: "/TTTAR",
  },
  {
    title: "Twenty To Ten",
    category: ["Photography", "Creative Media"],
    image: "/assets/Work_Assets/TTTCoverImage1.png",
    hoverImage: "/assets/Work_Assets/TTTCoverImage2.png",
    link: "/TwentyToTen",
  },
  {
    title: "Voting Is Cool",
    category: ["Photography", "Creative Medias"],
    image: "/assets/Work_Assets/VOTECoverImage1.png",
    hoverImage: "/assets/Work_Assets/VOTECoverImage2.png",
    link: "/VotingIsCool",
  },

  {
    title: "Across The Amtrak",
    category: ["Photography"],
    image: "/assets/Work_Assets/ATACoverImage1.avif",
    hoverImage: "/assets/Work_Assets/ATACoverImage2.avif",
    link: "/AcrossTheAmtrak",
  },
  {
    title: "Creation Of Foam",
    category: ["Photography", "Creative Medias"],
    image: "/assets/Work_Assets/SEACoverImage1.avif",
    hoverImage: "/assets/Work_Assets/SEACoverImage2.avif",
    link: "/CreationOfFoam",
  },
  {
    title: "Sonicon Ava",
    category: ["Photography", "Creative Medias"],
    image: "/assets/Work_Assets/SAVACoverImage1.jpg",
    hoverImage: "/assets/Work_Assets/SAVACoverImage2.jpg",
    link: "/SoniconAva",
  },
  {
    title: "Urban Jungle",
    category: ["Photography", "Creative Medias"],
    image: "/assets/Work_Assets/UJCoverImage1.jpg",
    hoverImage: "/assets/Work_Assets/UJCoverImage2.jpg",
    link: "/BigCity",
  },
  {
    title: "The Kids Of LA",
    category: ["Photography", "Creative Medias"],
    image: "/assets/Work_Assets/KOLACoverImage1.avif",
    hoverImage: "/assets/Work_Assets/KOLACoverImage2.avif",
    link: "/TheKidsOfLA",
  },
  {
    title: "New York",
    category: ["Photography"],
    image: "/assets/Work_Assets/NYCoverImage1.avif",
    hoverImage: "/assets/Work_Assets/NYCoverImage2.avif",
    link: "/NewYork",
  },
  {
    title: "California",
    category: ["Photography"],
    image: "/assets/Work_Assets/CACoverImage1.avif",
    hoverImage: "/assets/Work_Assets/CACoverImage2.avif",
    link: "/California",
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
      : projects.filter((project) => project.category.includes(activeFilter));

  return (
    <>
      <MobileSidebar
        categories={categories}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      <main className="relative min-h-screen  desktopSM:overflow-hidden gap-[1vw] grid grid-cols-1 desktopSM:grid-cols-[1fr_1.3fr] bg-white">
        <div className="hidden overflow-hidden desktopSM:flex flex-row desktopSM:flex-col h-screen gap-6 ml-[1vw]">
          <h1 className=" mobile:origin-center text-[5vw] ipad:text-[3vw] ipad:mt-[3vw] md:text-[2.5vw] md:mt-[2vw] lg:text-[2vw] lg:mt-[2vw] font-archivo text-black font-bold text-left scale-y-[3] leading-[0.8]">
            Mateo Hernandez
          </h1>
          <SocialLinks
            instagram="https://www.instagram.com/_.tomateo._/"
            linkedin="https://www.linkedin.com/in/mateo-hernandez21/"
            email="mateoche76@gmail.com"
            size={25}
          />
        </div>
        <div className=" overflow-hidden">
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
          <FilterPatch
            categories={categories}
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />
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
        <div className="desktopSM:hidden bottom-0 left-0 w-full z-50 flex flex-row items-end bg-white border-2">
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

"use client";
import { useEffect, useRef, useState } from "react";
import ModalImageGrid from "../components/modalimagegrid";

const sections = ["Overview", "Digital Graphics", "Video"];

const projectInfo = [
  { label: "Role", value: "Communications Coordinator" },
  { label: "Organization", value: "NYU Office of Sustainability" },
];

const skillsInfo = [
  {
    label: "Software",
    value: [
      "Adobe Photoshop",
      "Canva",
      "Google Sheets",
      "Instagram",
      "LinkedIn",
      "Wordpress",
    ],
  },
  {
    label: "Skills",
    value: [
      "Social Media Management",
      "Internal Communication",
      "Graphic Design",
      "Digital Content Strategy",
      "Cross-Team Coordination",
      "Brand Consistency",
    ],
  },
];

type Props = {
  folders: Record<string, string[]>;
};

export default function OOSGD_Client({ folders }: Props) {
  const [active, setActive] = useState("Overview");

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
  }, []);

  return (
    <>
      <main>
        <h1 className="origin-top mt-[2vw] mb-[14vw] ml-[0.5vw]  md:text-[5vw] font-archivo text-black font-bold text-left scale-y-[3] leading-[0.8]">
          Office of Sustainability
        </h1>
      </main>
      <main className="relative min-h-screen grid grid-cols-1 md:grid-cols-[1fr_3fr] lg:grid-cols-[1fr_3fr] bg-white">
        {/* Mobile nav — horizontal at top */}
        <div className="flex items-center justify-center md:hidden flex-row gap-4 px-2 py-4 xs:py-6   m-1 sticky top-0 bg-white z-50 border-b-4 border-black">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section.toLowerCase().replace(/\s+/g, "-")}`}
              className={`text-[5vw] ipadSM:text-[2.8vw] align-center font-bold transition-all duration-200 ${
                active === section
                  ? "text-red-600 scale-y-[3]"
                  : "text-black opacity-40"
              }`}
            >
              {section}
            </a>
          ))}
        </div>
        {/* Left column — sticky nav */}
        <div className="hidden md:flex flex-col items-end justify-start sticky top-[3vw] h-fit pt-[3vw] pl-[2vw] gap-5">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section.toLowerCase().replace(/\s+/g, "-")}`}
              className={`text-sm font-bold transition-all duration-200 ${
                active === section
                  ? "text-red-600 translate-x-[4px] scale-y-[3]  text-[1.5vw] md:text-[2.5vw]"
                  : "text-black opacity-40 hover:opacity-100  text-[1.5vw] md:text-[2.5vw]"
              }`}
            >
              {section}
            </a>
          ))}
        </div>

        {/* Right column — all content */}
        <div className="flex flex-col m-[3vw] gap-15">
          <section id="overview">
            <div className="mb-[5vw] md:mb-[2vw]">
              <p className="text-black font-medium ipadSM:text-[3vw] md:text-[2vw]">
                <span className="scale-y-[2] inline-block font-bold">My</span>{" "}
                role focused on maintaining a consistent digital presence,
                improving internal communication workflows, and designing visual
                assets that made sustainability messaging more accessible and
                engaging. This position strengthened my ability to coordinate
                messaging across teams, manage digital platforms, and translate
                complex environmental topics into clear, visually compelling
                communication.
              </p>
            </div>
            <section className="flex flex-col gap-6 md:gap-0">
              <div className="flex flex-col md:flex-row gap-4 md:gap-[5vw] text-black items-start justify-start text-left md:mb-[1.5vw]">
                {projectInfo.map(({ label, value }) => (
                  <div key={label} className="w-full md:w-[20vw]">
                    <p className="text-[6vw] ipadSM:text-[3vw] md:text-[2.5vw] opacity-70 uppercase tracking-widest text-red-600 scale-y-[1.5]">
                      {label}
                    </p>
                    <p className="font-bold ipadSM:text-[3vw] text-[6.5vw] md:text-[2vw]">
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col md:flex-row gap-4 md:gap-[5vw] text-black items-start justify-start text-left">
                {skillsInfo.map(({ label, value }) => (
                  <div key={label} className="w-full md:w-[20vw]">
                    <p className="text-[6vw] ipadSM:text-[3vw] md:text-[2.5vw] opacity-70 uppercase tracking-widest text-red-600 scale-y-[1.5]">
                      {label}
                    </p>
                    <p className="font-bold ipadSM:text-[3vw] text-[5.5vw] md:text-[2vw]">
                      {value.join(", ")}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </section>
          <div className="w-full h-[4px] bg-black" />
          <section id="digital-graphics">
            <h1 className="mb-[16vw] xs:mt-[5vw] md:mt-[0vw] ipadSM:text-[10vw] md:mb-[4vw] ml-[0.5vw] md:text-[5vw] md:text-[4vw] font-archivo text-black uppercase tracking-widest text-left scale-y-[2.5] leading-[0.8]">
              Digital Graphics
            </h1>
            <ModalImageGrid folders={folders} folder="OfficeOfSustainability" />
            <ModalImageGrid
              folders={folders}
              folder="OfficeOfSustainabilityLandscape"
            />
          </section>
          <div className="w-full h-[4px] bg-black" />
          <section id="video">
            <h1 className="mt-[-5vw] xs:mt-[5vw] md:text-[5vw] ipadSM:mt-[-1vw] md:mt-none mb-[4vw] ml-[0.5vw] text-[12vw] ipadSM:text-[10vw] md:text-[4vw] font-archivo text-black uppercase tracking-widest text-left scale-y-[2.5] leading-[0.8]">
              Videos
            </h1>
            <div className="flex flex-row flex-wrap gap-4 mt-4">
              <div className="flex flex-row flex-wrap ipadSM:gap-1 md:gap-4 mt-4">
                {[
                  "DR2KIKrkalE",
                  "DRfNu6HgXQ3",
                  "DQesQrzkYDu",
                  "DPg6MIKCprt",
                  "DN5qhoKgRru",
                ].map((id) => (
                  <div
                    key={id}
                    className="w-full sm:w-[calc(50%-8px)]  lg:w-[calc(49%-8px)]  aspect-[9.6/16]"
                  >
                    <iframe
                      src={`https://www.instagram.com/reel/${id}/embed`}
                      className="w-full h-full"
                      allowTransparency={true}
                      allow="encrypted-media"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

"use client";
import { useEffect, useState } from "react";
import ModalImageGrid from "../components/modalimagegrid";

const sections = ["Overview", "Work", "Contact"];
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

  useEffect(() => {
    const observers = sections.map((section) => {
      const el = document.getElementById(section.toLowerCase());
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(section);
        },
        { threshold: 0.5 },
      );
      if (el) observer.observe(el);
      return observer;
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      <main>
        <h1 className="origin-top mt-[2vw] mb-[14vw] ml-[0.5vw]  md:text-[5vw] font-archivo text-black font-bold text-left scale-y-[3] leading-[0.8]">
          Office of Sustainability
        </h1>
      </main>
      <main className="relative min-h-screen grid grid-cols-1 md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_3fr] bg-white">
        {/* Left column — sticky nav */}
        <div className="hidden md:flex flex-col items-end justify-start sticky top-[3vw] h-fit pt-[3vw] pl-[2vw] gap-5">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section.toLowerCase()}`}
              className={`text-sm font-bold transition-all duration-200 ${
                active === section
                  ? "text-red-600 translate-x-[4px] scale-y-[3]  text-[1.5vw]"
                  : "text-black opacity-40 hover:opacity-100  text-[1.5vw]"
              }`}
            >
              {section}
            </a>
          ))}
        </div>

        {/* Right column — all content */}
        <div className="flex flex-col m-[3vw] gap-15">
          <section id="overview">
            <div className="mb-[2vw]">
              <p className="text-black font-medium text-[1.5vw]">
                <span className="scale-y-[2] inline-block font-bold">As</span> a
                Communications Coordinator for the NYU Office of Sustainability,
                I managed and supported communication efforts that connected
                students, staff, and faculty to sustainability initiatives
                across campus. My role focused on maintaining a consistent
                digital presence, improving internal communication workflows,
                and designing visual assets that made sustainability messaging
                more accessible and engaging. This position strengthened my
                ability to coordinate messaging across teams, manage digital
                platforms, and translate complex environmental topics into
                clear, visually compelling communication.
              </p>
            </div>
            <section className="flex flex-col">
              <div className="flex flex-row gap-[5vw] text-black items-start justify-start text-left">
                {projectInfo.map(({ label, value }) => (
                  <div key={label} className="w-[20vw]">
                    <p className="text-[1.5vw] opacity-70 uppercase tracking-widest">
                      {label}
                    </p>
                    <p className="font-bold text-[1.4vw]">{value}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-row gap-[5vw] text-black items-start justify-start text-left">
                {skillsInfo.map(({ label, value }) => (
                  <div key={label} className="w-[20vw]">
                    <p className="text-[1.5vw] opacity-70 uppercase tracking-widest">
                      {label}
                    </p>
                    <p className="font-bold text-[1.4vw]">{value.join(", ")}</p>
                  </div>
                ))}
              </div>
            </section>
          </section>

          <section id="work">
            <h1 className="origin-top mt-[2vw] mb-[14vw] ml-[0.5vw] md:text-[5vw] font-archivo text-black font-bold text-left scale-y-[3] leading-[0.8]">
              Digital Graphics
            </h1>
            <ModalImageGrid folders={folders} folder="OfficeOfSustainability" />
            <div className="flex flex-col gap-4 mt-4">
              <iframe
                src="https://www.instagram.com/reel/DR2KIKrkalE/embed"
                width="400"
                height="700"
                allowTransparency={true}
                allow="encrypted-media"
              />
              <iframe
                src="https://www.instagram.com/reel/DRfNu6HgXQ3/embed"
                width="400"
                height="700"
                allowTransparency={true}
                allow="encrypted-media"
              />
              <iframe
                src="https://www.instagram.com/reel/DQesQrzkYDu/embed"
                width="400"
                height="700"
                allowTransparency={true}
                allow="encrypted-media"
              />
              <iframe
                src="https://www.instagram.com/reel/DPg6MIKCprt/embed"
                width="400"
                height="700"
                allowTransparency={true}
                allow="encrypted-media"
              />
              <iframe
                src="https://www.instagram.com/reel/DN5qhoKgRru/embed"
                width="400"
                height="700"
                allowTransparency={true}
                allow="encrypted-media"
              />
            </div>
          </section>

          <section id="contact">
            <h1>Contact</h1>
          </section>
        </div>
      </main>
    </>
  );
}

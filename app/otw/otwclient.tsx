"use client";
import Image from "next/image";
import BulletList from "../components/bulletedlist";
import StatsGrid from "../components/statsgrid";
import SectionIntro from "../components/sectionintro";
import SectionLine from "../components/sectionline";
import ProjectSkills from "../components/projectskills";
import GoBack from "../components/goback";
import LegAccordion from "../components/LegAccordian";

type Props = {
  folders: Record<string, string[]>;
};

export default function OTW_Client({ folders }: Props) {
  return (
    <>
      <GoBack />
      <div className="relative w-full aspect-[18/9]">
        <Image
          src="/assets/Work_Assets/OnTrailWith/OTWWebHeader.png"
          alt="header"
          fill
          className="object-cover"
        />
      </div>

      <main className="relative min-h-screen grid grid-cols-1 md:grid-cols-[2fr_1fr] bg-white overflow-visible items-start">
        <div className="flex flex-col m-[3vw] gap-5">
          <section id="color-system" className="relative w-full aspect-[33/9]">
            <Image
              src="/assets/Work_Assets/OnTrailWith/WebColorSystemOTW.png"
              alt="header"
              fill
              className="object-cover"
            />
          </section>
          <section id="typography" className="relative w-full aspect-[12/9]">
            <Image
              src="/assets/Work_Assets/OnTrailWith/WebTypographyOTW.png"
              alt="header"
              fill
              className="object-cover"
            />
          </section>
          <section id="timeline" className="relative w-full aspect-[30/11]">
            <Image
              src="/assets/Work_Assets/OnTrailWith/WebTimelineOTW.png"
              alt="header"
              fill
              className="object-cover"
            />
          </section>
          <section id="final-product" className="relative w-full aspect-[3/8]">
            <Image
              src="/assets/Work_Assets/OnTrailWith/OTWShowcase1.png"
              alt="header"
              fill
              className="object-cover"
            />
          </section>
          <section className="relative w-full aspect-[1.42/1]">
            <Image
              src="/assets/Work_Assets/OnTrailWith/OTWShowcase2.png"
              alt="header"
              fill
              className="object-cover"
            />
          </section>
        </div>

        <div className="flex flex-col">
          <section className="p-5">
            <SectionIntro
              description="At the heart of this project, was to highlight the organizations most impressive hikes. My goal was to ensure that every user that visited the website would have a seamless journey, one that would be smooth, and take them through On Trail With’s top hiking experiences. With an eye for detail and dedication for excellence, we strove to create a platform that would reflect the healing and calm nature of the organizations work. While at the end of the day,. beaccessible to all."
              title="Overview"
            />
            <ProjectSkills
              role="Sole Developer/Designer"
              organization="On Trail With"
              softwares={[
                "Wix",
                "Figma",
                "Adobe Photoshop",
                "Visual Studio Code",
              ]}
            />
          </section>
          <section>
            <LegAccordion
              topLegSrc="/assets/TopLegAccordian.png"
              bottomLegSrc="/assets/BottomLegAccordian.png"
            >
              <section id="problem">
                <SectionIntro
                  description="Users struggled to quickly find relevant information due to unclear navigation and inconsistent content organization. The website lacked a defined hierarchy, making it difficult to explore trails, stories, and resources efficiently; especially on mobile devices."
                  title="Problem"
                />
                <BulletList
                  items={[
                    "Pages were difficult to scan quickly",
                    "Mobile usability was limited",
                    "Navigation was not intuitive",
                    "Content hierarchy was unclear",
                  ]}
                />
              </section>
              <SectionLine />
              <section id="research">
                <SectionIntro
                  description="To guide design decisions, I analyzed how users interact with content-heavy websites and identified common usability patterns."
                  title="Research"
                />
                <StatsGrid
                  sections={[
                    {
                      title: "Research Methods",
                      bullets: [
                        "Competitive analysis of similar websites",
                        "Review of navigation patterns and content usage",
                      ],
                    },
                    {
                      title: "Key Findings",
                      bullets: [
                        "Users prefer predictable navigation structures",
                        "Clear visual hierarchy improves task completion",
                        "Mobile responsiveness significantly impacts usability",
                        "Reducing cognitive load improves engagement",
                      ],
                    },
                  ]}
                />
              </section>
              <SectionLine />
              <section id="reflection">
                <SectionIntro
                  description="This project strengthened my understanding of how thoughtful design decisions directly impact usability and user confidence. I learned that effective UX is not just about visual design, but about organizing information in a way that reduces friction and supports user goals. By restructuring navigation and prioritizing clarity, I saw how small changes in hierarchy and layout can significantly improve how users interact with a website. Moving forward, I aim to deepen my skills in usability testing and data-driven design decisions, while continuing to create experiences that are both intuitive and accessible. This project helped solidify my interest in designing digital products that balance functionality, clarity, and meaningful user engagement."
                  title="Reflection"
                />
              </section>
            </LegAccordion>
          </section>
        </div>
      </main>
    </>
  );
}

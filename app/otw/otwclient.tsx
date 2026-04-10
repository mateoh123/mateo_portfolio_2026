"use client";
import ScrollNav from "../components/scrollnav";
import WorkDescription from "../components/workdescription";
import Image from "next/image";
import SectionTitle from "../components/sectiontitle";
import SectionLine from "../components/sectionline";
import ProjectSkills from "../components/projectskills";

const sections = [
  "Overview",
  "Problem",
  "Research",
  "Color System",
  "Typography",
  "Timeline",
  "Final Product",
  "Reflection",
];

const projectInfo = [
  { label: "Role", value: "Sole Developer/Designer" },
  { label: "Organization", value: "On Trail With" },
];

const skillsInfo = [
  {
    label: "Software",
    value: ["Figma", "Wix", "Adobe Photoshop"],
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

export default function OTW_Client({ folders }: Props) {
  return (
    <>
      <div className="relative w-full aspect-[18/9]">
        <Image
          src="/assets/Work_Assets/OnTrailWith/OTWWebHeader.png"
          alt="header"
          fill
          className="object-cover"
        />
      </div>

      <main className="relative min-h-screen grid grid-cols-1 md:grid-cols-[1fr_3fr] lg:grid-cols-[1fr_3fr] bg-white">
        <ScrollNav sections={sections} />

        {/* Right column — all content */}
        <div className="flex flex-col m-[3vw] gap-15">
          <section id="overview">
            <WorkDescription
              description="At the heart of this project, was to highlight the organizations most impressive hikes. 
My goal was to ensure that every user that visited the website would have a seamless journey, one that would be smooth, and take them through On Trail With’s top hiking experiences. 
With an eye for detail and dedication for excellence, we strove to create a platform that would reflect the healing and calm nature of the organizations work. 
While at the end of the day,. beaccessible to all."
            />
          </section>
          <section className="flex flex-col gap-6 md:gap-4">
            <ProjectSkills items={projectInfo} />
            <ProjectSkills items={skillsInfo} />
          </section>
          <SectionLine />
          <section id="problem">
            <SectionTitle title="Problem" />
            <WorkDescription description="Users struggled to quickly find relevant information due to unclear navigation and inconsistent content organization. The website lacked a defined hierarchy, making it difficult to explore trails, stories, and resources efficiently; especially on mobile devices." />
            <ul className="list-disc pl-6 ipadSM:text-[2.8vw] md:text-[1.8vw] lg:text-[1.6vw] text-black">
              <li>Pages were difficult to scan quickly</li>
              <li>Mobile usability was limited</li>
              <li>Navigation was not intuitive</li>
              <li>Content hierarchy was unclear</li>
            </ul>
          </section>
          <SectionLine />
          <section id="research">
            <SectionTitle title="Research" />
            <WorkDescription description="To guide design decisions, I analyzed how users interact with content-heavy websites and identified common usability patterns." />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 ipadSM:text-[2.8vw] md:text-[1.8vw] lg:text-[1.6vw] text-black">
              <div>
                <p className="uppercase tracking-widest opacity-70 mb-3 mt-3 scale-y-[2]">
                  Research Methods
                </p>
                <ul className="list-disc pl-6">
                  <li>Competitive analysis of similar websites</li>
                  <li>Review of navigation patterns and content usage</li>
                </ul>
              </div>
              <div>
                <p className="uppercase tracking-widest opacity-70 mb-3 mt-3 scale-y-[2]">
                  Key Findings
                </p>
                <ul className="list-disc pl-6">
                  <li>Users prefer predictable navigation structures</li>
                  <li>Clear visual hierarchy improves task completion</li>
                  <li>Mobile responsiveness significantly impacts usability</li>
                  <li>Reducing cognitive load improves engagement</li>
                </ul>
              </div>
            </div>
          </section>
          <SectionLine />
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
          <SectionLine />
          <section id="reflection">
            <SectionTitle title="Reflection" />
            <WorkDescription description="This project strengthened my understanding of how thoughtful design decisions directly impact usability and user confidence. I learned that effective UX is not just about visual design, but about organizing information in a way that reduces friction and supports user goals. By restructuring navigation and prioritizing clarity, I saw how small changes in hierarchy and layout can significantly improve how users interact with a website. Moving forward, I aim to deepen my skills in usability testing and data-driven design decisions, while continuing to create experiences that are both intuitive and accessible. This project helped solidify my interest in designing digital products that balance functionality, clarity, and meaningful user engagement." />
          </section>
        </div>
      </main>
    </>
  );
}

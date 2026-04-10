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
  { label: "Organization", value: "AJIHOME" },
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

export default function AJ_Client({ folders }: Props) {
  return (
    <>
      <div className="relative w-full aspect-[18/10.5]">
        <Image
          src="/assets/Work_Assets/Ajihome/WebHeaderAJ.png"
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
              description="The goal was to provide context for the brands creation, while promoting their projects.
Inspired by the minimal design of AJIHOME, my goal was to ensure that the users felt transported to the world surrounding AJIHOME. The cheeky monkey mascot, were crucial to get the brands identity across.
I created a platform that was both simple, but had subtle designs that made nod to the brands origins, while still playing around with the monkey mascot.
"
            />
          </section>
          <section className="flex flex-col gap-6 md:gap-4">
            <ProjectSkills items={projectInfo} />
            <ProjectSkills items={skillsInfo} />
          </section>
          <SectionLine />
          <section id="problem">
            <SectionTitle title="Problem" />
            <WorkDescription description="The brand needed an online shopping platform that clearly presented products and supported a smooth purchasing experience. Without a structured interface, customers could struggle to browse items efficiently or feel confident completing transactions." />
            <ul className="list-disc pl-6 ipadSM:text-[2.8vw] md:text-[1.8vw] lg:text-[1.6vw] text-black">
              <li>Users needed a clear way to browse and filter products</li>
              <li>
                The checkout flow needed to be simple and intuitiveability was
                limited
              </li>
              <li>The brand required a cohesive visual identity</li>
              <li>The site needed to perform well on mobile devices</li>
            </ul>
          </section>
          <SectionLine />
          <section id="research">
            <SectionTitle title="Research" />
            <WorkDescription description="I analyzed common patterns used in successful fashion e-commerce platforms and focused on user expectations when shopping online." />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 ipadSM:text-[2.8vw] md:text-[1.8vw] lg:text-[1.6vw] text-black">
              <div>
                <p className="uppercase tracking-widest opacity-70 mb-3 mt-3 scale-y-[2]">
                  Research Methods
                </p>
                <ul className="list-disc pl-6">
                  <li>Review of e-commerce navigation and checkout patterns</li>
                  <li>Usability observation of online shopping behaviors</li>
                  <li>Evaluation of mobile shopping workflows</li>
                </ul>
              </div>
              <div>
                <p className="uppercase tracking-widest opacity-70 mb-3 mt-3 scale-y-[2]">
                  Key Findings
                </p>
                <ul className="list-disc pl-6">
                  <li>High-quality visuals increase purchase confidence</li>
                  <li>Users want fast product browsing and clear categories</li>
                  <li>Simple checkout flows reduce abandonment</li>
                  <li>Mobile usability is critical for e-commerce success</li>
                </ul>
              </div>
            </div>
          </section>
          <SectionLine />
          <section id="color-system" className="relative w-full aspect-[33/10]">
            <Image
              src="/assets/Work_Assets/Ajihome/WebColorSystemAJ.png"
              alt="header"
              fill
              className="object-cover"
            />
          </section>
          <section id="typography" className="relative w-full aspect-[12/6]">
            <Image
              src="/assets/Work_Assets/Ajihome/WebTypographyAJ.png"
              alt="header"
              fill
              className="object-cover"
            />
          </section>
          <section id="timeline" className="relative w-full aspect-[30/16]">
            <Image
              src="/assets/Work_Assets/Ajihome/WebTimelineAJ.png"
              alt="header"
              fill
              className="object-cover"
            />
          </section>
          <section id="final-product" className="relative w-full aspect-[3/8]">
            <Image
              src="/assets/Work_Assets/Ajihome/AJShowcase1.png"
              alt="header"
              fill
              className="object-cover"
            />
          </section>
          <section className="relative w-full aspect-[3/7.7]">
            <Image
              src="/assets/Work_Assets/Ajihome/AJShowcase2.png"
              alt="header"
              fill
              className="object-cover"
            />
          </section>
          <SectionLine />
          <section id="reflection">
            <SectionTitle title="Reflection" />
            <WorkDescription description="Designing an e-commerce experience for a fashion brand taught me how user experience directly influences purchasing behavior. I learned that successful online shopping experiences depend on clarity, trust, and efficiency; from browsing products to completing checkout. This project strengthened my ability to design with both user needs and business goals in mind. It also reinforced the importance of responsive design, visual hierarchy, and intuitive navigation in creating seamless digital shopping experiences. Moving forward, I aim to continue developing data-informed design strategies that improve usability and conversion in digital products." />
          </section>
        </div>
      </main>
    </>
  );
}

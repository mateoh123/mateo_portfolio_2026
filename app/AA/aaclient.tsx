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
  "Constraints",
  "Color System",
  "Typography",
  "Timeline",
  "Final Product",
  "Reflection",
];

const projectInfo = [
  { label: "Role", value: "Sole Developer/Designer" },
  { label: "Organization", value: "NYU Admissions Ambassadors" },
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

export default function AA_Client({ folders }: Props) {
  return (
    <>
      <div className="relative w-full aspect-[18/10.5]">
        <Image
          src="/assets/Work_Assets/Admissions/WebHeaderAA.png"
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
            <WorkDescription description="As a Website Administrator for the Admissions Ambassador program at New York University, I managed and improved an internal website used by student ambassadors and staff to access resources, updates, and operational information. The platform served as a centralized hub for internal communication and training materials." />
          </section>
          <section className="flex flex-col gap-6 md:gap-4">
            <ProjectSkills items={projectInfo} />
            <ProjectSkills items={skillsInfo} />
          </section>
          <SectionLine />
          <section id="problem">
            <SectionTitle title="Problem" />
            <WorkDescription description="The internal website needed to support a large group of student ambassadors who relied on the platform for schedules, resources, and communication. However, maintaining clarity and consistency across content updates was challenging, especially within the constraints of institutional branding standards." />
            <ul className="list-disc pl-6 ipadSM:text-[2.8vw] md:text-[1.8vw] lg:text-[1.6vw] text-black">
              <li>
                Internal users needed quick access to frequently used resources
              </li>
              <li>
                Content updates needed to follow strict brand and formatting
                guidelines
              </li>
              <li>
                Information organization needed to remain consistent across
                pages
              </li>
              <li>The system needed to scale for a large number of users</li>
              <li>Navigation needed to be intuitive for new ambassadors</li>
            </ul>
          </section>
          <SectionLine />
          <section id="constraints">
            <SectionTitle title="Constraints" />
            <WorkDescription description="This project required working within structured organizational limitations, similar to enterprise environments." />
            <ul className="list-disc pl-6 ipadSM:text-[2.8vw] md:text-[1.8vw] lg:text-[1.6vw] text-black">
              <li>Strict institutional branding guidelines</li>
              <li>Limited flexibility in design system components</li>
              <li>Required content formatting standards</li>
              <li>Multiple stakeholders reviewing updates</li>
              <li>Need for consistency across departments</li>
            </ul>
          </section>
          <SectionLine />
          <section id="color-system" className="relative w-full aspect-[36/10]">
            <Image
              src="/assets/Work_Assets/Admissions/WebColorSystemAA.png"
              alt="header"
              fill
              className="object-cover"
            />
          </section>
          <section id="typography" className="relative w-full aspect-[6/6]">
            <Image
              src="/assets/Work_Assets/Admissions/WebTypographyAA.png"
              alt="header"
              fill
              className="object-cover"
            />
          </section>
          <section id="timeline" className="relative w-full aspect-[30/11]">
            <Image
              src="/assets/Work_Assets/Admissions/WebTimelineAA.png"
              alt="header"
              fill
              className="object-cover"
            />
          </section>
          <section id="final-product" className="relative w-full aspect-[3/8]">
            <Image
              src="/assets/Work_Assets/Admissions/AAShowcase1.png"
              alt="header"
              fill
              className="object-cover"
            />
          </section>
          <section className="relative w-full aspect-[3/8.2]">
            <Image
              src="/assets/Work_Assets/Admissions/AAShowcase2.png"
              alt="header"
              fill
              className="object-cover"
            />
          </section>
          <section className="relative w-full aspect-[375/671]">
            <Image
              src="/assets/Work_Assets/Admissions/AAShowcase4.png"
              alt="header"
              fill
              className="object-cover"
            />
          </section>
          <SectionLine />
          <section id="reflection">
            <SectionTitle title="Reflection" />
            <WorkDescription description="Working on the internal website for the Admissions Ambassador program helped me understand how user experience operates within large organizational systems. Unlike personal or small-scale projects, this role required balancing usability with strict brand and structural constraints. I learned that consistency is critical when designing for large organizations, where many users rely on standardized systems to complete tasks efficiently. This experience strengthened my ability to work within design systems, follow established guidelines, and create internal assets that support operational workflows." />
          </section>
        </div>
      </main>
    </>
  );
}

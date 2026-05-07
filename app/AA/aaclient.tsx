"use client";
import Image from "next/image";
import BulletList from "../components/bulletedlist";
import SectionIntro from "../components/sectionintro";
import SectionLine from "../components/sectionline";
import ProjectSkills from "../components/projectskills";
import GoBack from "../components/goback";
import LegAccordion from "../components/LegAccordian";

type Props = {
  folders: Record<string, string[]>;
};

export default function AA_Client({ folders }: Props) {
  return (
    <>
      <GoBack />
      <div className="relative w-full aspect-[18/10.5]">
        <Image
          src="/assets/Work_Assets/Admissions/WebHeaderAA.png"
          alt="header"
          fill
          className="object-cover"
        />
      </div>

      <main className="relative min-h-screen grid grid-cols-1 md:grid-cols-[2fr_1fr] bg-white overflow-visible items-start">
        <div className=" p-2 w-full">
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
        </div>
        <div className="flex flex-col">
          <section className="p-5">
            <SectionIntro
              description="As a Website Administrator for the Admissions Ambassador program at New York University, I managed and improved an internal website used by student ambassadors and staff to access resources, updates, and operational information. The platform served as a centralized hub for internal communication and training materials."
              title="Overview"
            />
            <ProjectSkills
              role="Sole Developer/Designer"
              organization="NYU Admissions Ambassadors"
              softwares={["Wordpress", "Adobe Photoshop", "Visual Studio Code"]}
            />
          </section>
          <section>
            <LegAccordion
              topLegSrc="/assets/TopLegAccordian.png"
              bottomLegSrc="/assets/BottomLegAccordian.png"
            >
              <section id="problem">
                <SectionIntro
                  description="The internal website needed to support a large group of student ambassadors who relied on the platform for schedules, resources, and communication. However, maintaining clarity and consistency across content updates was challenging, especially within the constraints of institutional branding standards."
                  title="Problem"
                />
                <BulletList
                  items={[
                    "Internal users needed quick access to frequently used resources",
                    "Content updates needed to follow strict brand and formatting guidelines",
                    "Information organization needed to remain consistent across pages",
                    "The system needed to scale for a large number of users",
                    "Navigation needed to be intuitive for new ambassadors",
                  ]}
                />
              </section>
              <SectionLine />
              <section id="constraints">
                <SectionIntro
                  description="This project required working within structured organizational limitations, similar to enterprise environments."
                  title="Constraints"
                />
                <BulletList
                  items={[
                    "Strict institutional branding guidelines",
                    "Limited flexibility in design system components",
                    "Required content formatting standards",
                    "Multiple stakeholders reviewing updates",
                    "Need for consistency across departments",
                  ]}
                />
              </section>
              <SectionLine />
              <section id="reflection">
                <SectionIntro
                  description="Working on the internal website for the Admissions Ambassador program helped me understand how user experience operates within large organizational systems. Unlike personal or small-scale projects, this role required balancing usability with strict brand and structural constraints. I learned that consistency is critical when designing for large organizations, where many users rely on standardized systems to complete tasks efficiently. This experience strengthened my ability to work within design systems, follow established guidelines, and create internal assets that support operational workflows."
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

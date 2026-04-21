"use client";
import ScrollNav from "../components/scrollnav";
import WorkDescription from "../components/workdescription";
import Image from "next/image";
import BulletList from "../components/bulletedlist";
import StatsGrid from "../components/statsgrid";
import SectionTitle from "../components/sectiontitle";
import SectionIntro from "../components/sectionintro";
import SectionLine from "../components/sectionline";
import ProjectSkills from "../components/projectskills";
import GoBack from "../components/goback";

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

type Props = {
  folders: Record<string, string[]>;
};

export default function AJ_Client({ folders }: Props) {
  return (
    <>
      <GoBack />
      <div className="relative w-full aspect-[18/10.5]">
        <Image
          src="/assets/Work_Assets/Ajihome/WebHeaderAJ.png"
          alt="header"
          fill
          className="object-cover"
        />
      </div>

      <main className="relative min-h-screen grid grid-cols-1 md:grid-cols-[1fr_3fr] lg:grid-cols-[1fr_3fr] bg-white">
        <ScrollNav sections={sections} activeColor="text-black" />

        {/* Right column — all content */}
        <div className="flex flex-col m-[3vw] gap-5">
          <section id="overview">
            <SectionIntro
              description="The goal was to provide context for the brands creation, while promoting their projects. Inspired by the minimal design of AJIHOME, my goal was to ensure that the users felt transported to the world surrounding AJIHOME. The cheeky monkey mascot, were crucial to get the brands identity across. I created a platform that was both simple, but had subtle designs that made nod to the brands origins, while still playing around with the monkey mascot."
              title="Overview"
            />
            <ProjectSkills
              role="Sole Developer/Designer"
              organization="AJIHOME"
              softwares={[
                "Shopify",
                "Figma",
                "Adobe Photoshop",
                "Procreate",
                "Visual Studio Code",
              ]}
            />
          </section>
          <SectionLine />
          <section id="problem">
            <SectionIntro
              description="The brand needed an online shopping platform that clearly presented products and supported a smooth purchasing experience. Without a structured interface, customers could struggle to browse items efficiently or feel confident completing transactions."
              title="Problem"
            />
            <BulletList
              items={[
                "Users needed a clear way to browse and filter products",
                "The checkout flow needed to be simple and intuitiveability was limited",
                "The brand required a cohesive visual identity",
                "The site needed to perform well on mobile devices",
              ]}
            />
          </section>
          <SectionLine />
          <section id="research">
            <SectionIntro
              description="I analyzed common patterns used in successful fashion e-commerce platforms and focused on user expectations when shopping online."
              title="Research"
            />
            <StatsGrid
              sections={[
                {
                  title: "Research Methods",
                  bullets: [
                    "Review of e-commerce navigation and checkout patterns",
                    "Usability observation of online shopping behaviors",
                    "Evaluation of mobile shopping workflows",
                  ],
                },
                {
                  title: "Key Findings",
                  bullets: [
                    "High-quality visuals increase purchase confidence",
                    "Users want fast product browsing and clear categories",
                    "Simple checkout flows reduce abandonment",
                    "Mobile usability is critical for e-commerce success",
                  ],
                },
              ]}
            />
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
            <SectionIntro
              description="Designing an e-commerce experience for a fashion brand taught me how user experience directly influences purchasing behavior. I learned that successful online shopping experiences depend on clarity, trust, and efficiency; from browsing products to completing checkout. This project strengthened my ability to design with both user needs and business goals in mind. It also reinforced the importance of responsive design, visual hierarchy, and intuitive navigation in creating seamless digital shopping experiences. Moving forward, I aim to continue developing data-informed design strategies that improve usability and conversion in digital products."
              title="Reflection"
            />
          </section>
        </div>
      </main>
    </>
  );
}

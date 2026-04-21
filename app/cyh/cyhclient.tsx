"use client";
import Image from "next/image";
import ModalImageGrid from "../components/modalimagegrid";
import StatsGrid from "../components/statsgrid";
import ProjectSkills from "../components/projectskills";
import ScrollNav from "../components/scrollnav";
import SectionTitle from "../components/sectiontitle";
import SectionSubtitle from "../components/sectionsubtitle";
import SectionIntro from "../components/sectionintro";
import InstagramShortsGrid from "../components/instagramshortsgrid";
import BulletList from "../components/bulletedlist";
import WorkDescription from "../components/workdescription";
import SectionLine from "../components/sectionline";
import GoBack from "../components/goback";

const sections = ["Overview", "Problem", "Process", "Final Product"];

type Props = {
  folders: Record<string, string[]>;
};

export default function CYH_Client({ folders }: Props) {
  return (
    <>
      <GoBack />
      <div>
        <h1 className="origin-top mt-[2vw] mb-[14vw] ml-[0.5vw]  md:text-[5vw] font-archivo text-black font-bold text-left scale-y-[3] leading-[0.8]">
          Clean Your Hard Drive
        </h1>
      </div>
      <main className="relative min-h-screen grid grid-cols-1 md:grid-cols-[1fr_3fr] lg:grid-cols-[1fr_3fr] bg-white">
        <ScrollNav sections={sections} />

        {/* Right column — all content */}
        <div className="flex flex-col m-[3vw] gap-5">
          <section id="overview">
            <SectionIntro
              description="As part of the Sustainability Leaders Fellowship, I developed a mini awareness campaign encouraging students and staff to clean unused files from their devices to reduce strain on university data servers. While digital storage often feels invisible, excessive data usage contributes to increased server demand, energy consumption, and operational stress on institutional infrastructure. The campaign focused on translating a technical sustainability concept into a simple, actionable behavior: clean your hard drive."
              title="Overview"
            />
            <ProjectSkills
              role="Lead, Video Production, Designer"
              organization="NYU Office of Sustainability"
              softwares={[
                "Adobe Photoshop",
                "Canva",
                "Adobe Premiere pro",
                "Adobe After Effects",
              ]}
            />
          </section>
          <SectionLine />
          <section id="problem">
            <SectionIntro
              description="University data servers store massive amounts of unused files, outdated documents, and duplicate media. This unnecessary storage increases energy consumption, server maintenance demands, and system inefficiencies. However, most users are unaware that their personal digital habits contribute to institutional resource usage."
              title="Problem"
            />
            <SectionSubtitle title="Campaign Goal" />
            <WorkDescription description="Encourage members of the university community to delete unnecessary files and maintain organized digital storage to reduce strain on institutional data systems." />
          </section>
          <SectionLine />
          <section id="process">
            <SectionTitle title="Process" />
            <SectionSubtitle title="Identifying the Communication Gap" />
            <WorkDescription description="Through my work in the Sustainability Leaders Fellowship, I learned that many sustainability conversations focus on visible behaviors like recycling or energy use, while digital behaviors are often overlooked." />
            <SectionSubtitle title="Research" />
            <StatsGrid
              sections={[
                {
                  title: "Water Usage Data",
                  bullets: [
                    "Data Servers consumed approximately 300 million gallons of water daily in 2022",
                    "Forecasted incline, reaching nearly 500 million by 2023",
                    "Equivalent to filling 455 Olympic Swimming Pools",
                  ],
                  image: "/assets/waterstats.avif",
                  imageAlt: "water stats",
                },
                {
                  title: "Energy Usage Data",
                  bullets: [
                    "Data Servers consumed about 4.4% of US Electricity in 2023",
                    "Predicted to reach between 6.7%-12% by 2028",
                    "Energy usage has increased from 58 Terawatt hours (TWh) in 2024 to 176 TWh in 2023",
                    "Equivalent to 16 to 17 million U.S. homes per year",
                  ],
                  image: "/assets/energystats.avif",
                  imageAlt: "energy stats",
                },
              ]}
            />
          </section>
          <SectionLine />
          <section id="final-product">
            <SectionTitle title="Final Product" />
            <div className="relative w-full aspect-video mt-5 mb-5">
              <iframe
                src="https://www.youtube.com/embed/FF-0VAWXqo8"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <ModalImageGrid folders={folders} folder="CleanYourHardDrive" />
          </section>
        </div>
      </main>
    </>
  );
}

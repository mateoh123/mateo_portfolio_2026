"use client";
import ModalImageGrid from "../components/modalimagegrid";
import StatsGrid from "../components/statsgrid";
import ProjectSkills from "../components/projectskills";
import ScrollNav from "../components/scrollnav";
import SectionTitle from "../components/sectiontitle";
import SectionSubtitle from "../components/sectionsubtitle";
import SectionIntro from "../components/sectionintro";
import WorkDescription from "../components/workdescription";
import SectionLine from "../components/sectionline";
import GoBack from "../components/goback";
import MainContentContainer from "../components/maincontentcontainer";
import LeftContentContainer from "../components/leftcontentcontainer";
import RightContentContainer from "../components/rightcontentcontainer";
import MainWorkTitle from "../components/mainworktitle";
import LegAccordion from "../components/LegAccordian";

type Props = {
  folders: Record<string, string[]>;
};

export default function CYH_Client({ folders }: Props) {
  return (
    <>
      <GoBack />
      <MainContentContainer>
        <LeftContentContainer>
          <div className="relative w-full aspect-video mt-5 mb-5">
            <iframe
              src="https://www.youtube.com/embed/FF-0VAWXqo8"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <ModalImageGrid folders={folders} folder="CleanYourHardDrive" />
        </LeftContentContainer>
        <RightContentContainer>
          <section id="overview">
            <div className="pt-5 mb-5">
              <MainWorkTitle title=" Clean Your Hard Drive" />
            </div>
            <WorkDescription description="As part of the Sustainability Leaders Fellowship, I developed a mini-awareness campaign encouraging students and staff to remove unused files from their devices to reduce strain on the university's data servers. The campaign focused on translating a technical sustainability concept into a simple, actionable behavior: clean your hard drive." />
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
          <div className="-mx-5">
            <LegAccordion
              topLegSrc="/assets/TopLegAccordian.png"
              bottomLegSrc="/assets/BottomLegAccordian.png"
            >
              <section id="problem">
                <SectionTitle title="Problem" />
                <WorkDescription description="University data servers store massive amounts of unused files, outdated documents, and duplicate media. This unnecessary storage increases energy consumption, server maintenance demands, and system inefficiencies. However, most users are unaware that their personal digital habits contribute to institutional resource usage." />
                <SectionSubtitle title="Campaign Goal" />
                <WorkDescription description="Encourage members of the university community to delete unnecessary files and maintain organized digital storage to reduce strain on institutional data systems." />
              </section>
              <SectionLine />
              <section id="process">
                <SectionTitle title="Process" />
                <SectionSubtitle title="Communication Gap" />
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
            </LegAccordion>
          </div>
        </RightContentContainer>
      </MainContentContainer>
    </>
  );
}

"use client";
import ModalImageGrid from "../components/modalimagegrid";
import ProjectSkills from "../components/projectskills";
import ScrollNav from "../components/scrollnav";
import SectionTitle from "../components/sectiontitle";
import InstaVideoGrid from "../components/instagvideogrid";
import WorkDescription from "../components/workdescription";
import SectionLine from "../components/sectionline";
import GoBack from "../components/goback";
import SectionIntro from "../components/sectionintro";

const sections = ["Overview", "Digital Graphics", "Video"];

type Props = {
  folders: Record<string, string[]>;
};

export default function OOSGD_Client({ folders }: Props) {
  return (
    <>
      <GoBack />
      <div>
        <h1 className="origin-top mt-[2vw] mb-[14vw] ml-[0.5vw]  md:text-[5vw] font-archivo text-black font-bold text-left scale-y-[3] leading-[0.8]">
          NYU Office of Sustainability
        </h1>
      </div>
      <main className="relative min-h-screen grid grid-cols-1 md:grid-cols-[1fr_3fr] lg:grid-cols-[1fr_3fr] bg-white">
        <ScrollNav sections={sections} />

        {/* Right column — all content */}
        <div className="flex flex-col m-[3vw] gap-5">
          <section id="overview">
            <SectionIntro
              description="My role focused on maintaining a consistent digital presence, improving internal communication workflows, and designing visual assets that made sustainability messaging more accessible and engaging."
              title="Overview"
            />
            <ProjectSkills
              role="Communications Coordinator"
              organization="NYU Office of Sustainability"
              softwares={[
                "Adobe Photoshop",
                "Canva",
                "Google Sheets",
                "Instagram",
                "LinkedIn",
                "Wordpress",
              ]}
            />
          </section>
          <SectionLine />
          <section id="digital-graphics">
            <SectionTitle title="Digital Graphics" className="text-green-950" />
            <ModalImageGrid folders={folders} folder="OfficeOfSustainability" />
            <ModalImageGrid
              folders={folders}
              folder="OfficeOfSustainabilityLandscape"
            />
          </section>
          <SectionLine />
          <section id="video">
            <SectionTitle title="Video" className="text-green-950" />
            <InstaVideoGrid
              ids={[
                "DR2KIKrkalE",
                "DRfNu6HgXQ3",
                "DQesQrzkYDu",
                "DPg6MIKCprt",
                "DN5qhoKgRru",
              ]}
            />
          </section>
        </div>
      </main>
    </>
  );
}

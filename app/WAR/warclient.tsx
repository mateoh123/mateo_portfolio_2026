"use client";
import ModalImageGrid from "../components/modalimagegrid";
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

const sections = ["Overview", "Process", "Final Product"];

type Props = {
  folders: Record<string, string[]>;
};

export default function WAR_Client({ folders }: Props) {
  return (
    <>
      <GoBack />
      <div>
        <h1 className="origin-top mt-[2vw] mb-[14vw] ml-[0.5vw]  md:text-[5vw] font-archivo text-black font-bold text-left scale-y-[3] leading-[0.8]">
          WIRED: AR Magazine Cover
        </h1>
      </div>
      <main className="relative min-h-screen grid grid-cols-1 md:grid-cols-[1fr_3fr] lg:grid-cols-[1fr_3fr] bg-white">
        <ScrollNav sections={sections} />
        <div className="flex flex-col m-[3vw] gap-5">
          <section id="overview">
            <SectionIntro
              description="I animated WIRED magazine’s 'The Influence Machine' edition to explore how motion and augmented reality can push the boundaries of traditional magazine design. Using Photoshop’s rotoscoping techniques, I isolated and animated key visual elements from the magazine cover, then refined the motion and sequencing in Premiere Pro to create a cohesive animation. To further enhance engagement, I integrated the animation into an augmented reality experience using a Snapchat lens, allowing viewers to interact with the cover through their mobile devices."
              title="Overview"
            />
            <ProjectSkills
              role="Sole Motion Designer, AR Developer, Creative Technologist"
              organization="Personal Project"
              softwares={[
                "Adobe Photoshop",
                "Adobe Premiere Pro",
                "Snapchat Lens Studio",
              ]}
            />
          </section>
          <SectionLine />
          <section id="process">
            <SectionTitle title="Process" />
            <SectionSubtitle title="After Effects" />
            <ModalImageGrid folders={folders} folder="WAR" />
          </section>
          <SectionLine />
          <section id="final-product">
            <SectionTitle title="Final Product" />
            <InstagramShortsGrid
              urls={["https://www.youtube.com/embed/w-Og1LGbivg"]}
            />
          </section>
        </div>
      </main>
    </>
  );
}

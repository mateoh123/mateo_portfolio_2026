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

export default function TTTAR_Client({ folders }: Props) {
  return (
    <>
      <GoBack />
      <div>
        <h1 className="origin-top mt-[2vw] mb-[14vw] ml-[0.5vw]  md:text-[5vw] font-archivo text-black font-bold text-left scale-y-[3] leading-[0.8]">
          Twenty To Ten: AR Experience
        </h1>
      </div>
      <main className="relative min-h-screen grid grid-cols-1 md:grid-cols-[1fr_3fr] lg:grid-cols-[1fr_3fr] bg-white">
        <ScrollNav sections={sections} />

        {/* Right column — all content */}
        <div className="flex flex-col m-[3vw] gap-5">
          <section id="overview">
            <SectionIntro
              description="I animated WIRED magazine’s 'The Influence Machine' edition to explore how motion and augmented reality can push the boundaries of traditional magazine design. Using Photoshop’s rotoscoping techniques, I isolated and animated key visual elements from the magazine cover, then refined the motion and sequencing in Premiere Pro to create a cohesive animation. To further enhance engagement, I integrated the animation into an augmented reality experience using a Snapchat lens, allowing viewers to interact with the cover through their mobile devices."
              title="Overview"
            />
            <ProjectSkills
              role="Creative Technologist, Photographer, AR Developer"
              organization="Personal Project"
              softwares={[
                "Adobe Photoshop",
                "Adobe After Effects",
                "Snapchat Lens Studio",
                "Blender",
              ]}
            />
          </section>
          <SectionLine />
          <section id="process">
            <SectionTitle title="Process" />
            <SectionSubtitle title="Conceptulization" />
            <WorkDescription description="After completing the 'Twenty To Ten' photo series, I reflected on how the visual mood and themes could be expanded beyond still imagery. I wanted viewers to experience the photos as living moments rather than static scenes." />
            <BulletList
              items={[
                "Served as a motion capture actor, performing physical movements that were recorded and translated into animation data for the characters in the trailer",
                "Built key 3D environments in Blender, including the city scene and house scene used throughout the film",
                "Designed and implemented the sound effects for the final trailer to enhance immersion and narrative pacing",
              ]}
            />
            <ModalImageGrid folders={folders} folder="TTTAR" />
            <SectionSubtitle title="Animation in After Effects" />
            <WorkDescription description="I used Adobe After Effects to animate the photographs, adding motion and depth to the original images." />
            <BulletList
              items={[
                "Created motion animations and visual transitions",
                "Exported animated assets for AR integration",
              ]}
            />
            <SectionSubtitle title="Augmented Reality Development" />
            <WorkDescription description="Once the animations were complete, I integrated them into an augmented reality environment using Snapchat Lens Studio." />
            <BulletList
              items={[
                "Imported animated assets into Lens Studio",
                "Optimized assets for mobile performance",
                "Programmed interactive behaviors",
              ]}
            />
          </section>
          <SectionLine />
          <section id="final-product">
            <SectionTitle title="Final Product" />
            <InstagramShortsGrid
              urls={[
                "https://www.youtube.com/embed/EaON7ISVxIw",
                "https://www.youtube.com/embed/s5du9-7cQVw",
                "https://www.youtube.com/embed/LrOQFNh00R4",
              ]}
            />
          </section>
        </div>
      </main>
    </>
  );
}

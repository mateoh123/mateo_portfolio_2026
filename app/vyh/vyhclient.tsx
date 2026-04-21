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

const sections = ["Overview", "My Role", "Final Product"];

type Props = {
  folders: Record<string, string[]>;
};

export default function VYH_Client({}: Props) {
  return (
    <>
      <GoBack />
      <div>
        <h1 className="origin-top mt-[2vw] mb-[14vw] ml-[0.5vw]  md:text-[5vw] font-archivo text-black font-bold text-left scale-y-[3] leading-[0.8]">
          Valorax: Your Hero
        </h1>
      </div>
      <main className="relative min-h-screen grid grid-cols-1 md:grid-cols-[1fr_3fr] lg:grid-cols-[1fr_3fr] bg-white">
        <ScrollNav sections={sections} />

        {/* Right column — all content */}
        <div className="flex flex-col m-[3vw] gap-5">
          <section id="overview">
            <SectionIntro
              description="I had the opportunity to apply my skills in motion capture and 3D animation as part of a collaborative team project to create a stylized movie trailer using motion capture data recorded from my own physical movements. The project centered around an unconventional superhero narrative; a character whose actions often cause more harm than good, yet who struggles to let go of his public image and fame."
              title="Overview"
            />
            <ProjectSkills
              role="Actor, Video Editor, Unreal Editor"
              organization="Personal Project"
              softwares={[
                "Adobe Photoshop",
                "Adobe Premiere Pro",
                "Unreal Engine",
                "Blender",
                "OptiTrack",
              ]}
            />
          </section>
          <SectionLine />
          <section id="my-role">
            <SectionIntro
              description="I contributed to multiple stages of production across performance, environment design, and post-production, supporting the creation of a motion capture driven film trailer from concept to final edit."
              title="My Role"
            />
            <BulletList
              items={[
                "Served as a motion capture actor, performing physical movements that were recorded and translated into animation data for the characters in the trailer",
                "Built key 3D environments in Blender, including the city scene and house scene used throughout the film",
                "Designed and implemented the sound effects for the final trailer to enhance immersion and narrative pacing",
              ]}
            />
          </section>
          <SectionLine />
          <section id="final-product">
            <SectionTitle title="Final Product" />
            <div className="relative w-full aspect-video mt-5 mb-5">
              <iframe
                src="https://www.youtube.com/embed/JOXIoPQ1wh4"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

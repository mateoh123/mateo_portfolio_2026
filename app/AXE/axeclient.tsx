"use client";
import ProjectSkills from "../components/projectskills";
import ScrollNav from "../components/scrollnav";
import SectionTitle from "../components/sectiontitle";
import SectionIntro from "../components/sectionintro";
import WorkDescription from "../components/workdescription";
import SectionLine from "../components/sectionline";
import GoBack from "../components/goback";

const sections = ["Overview", "Final Product"];

const projectInfo = [
  { label: "Role", value: "Head Programmer" },
  { label: "Organization", value: "Personal Project" },
];

const skillsInfo = [
  {
    label: "Software",
    value: ["Blender", "Unity (C#)", " Meta Oculus Quest 3", "Adobe Photoshop"],
  },
  {
    label: "Skills",
  },
];

type Props = {
  folders: Record<string, string[]>;
};

export default function AXE_Client({}: Props) {
  return (
    <>
      <GoBack />
      <div>
        <h1 className="origin-top mt-[2vw] mb-[14vw] ml-[0.5vw]  md:text-[5vw] font-archivo text-black font-bold text-left scale-y-[3] leading-[0.8]">
          VR Axe Throwing
        </h1>
      </div>
      <main className="relative min-h-screen grid grid-cols-1 md:grid-cols-[1fr_3fr] lg:grid-cols-[1fr_3fr] bg-white">
        <ScrollNav sections={sections} />

        {/* Right column — all content */}
        <div className="flex flex-col m-[3vw] gap-15">
          <section id="overview">
            <SectionIntro
              description="As part of my XR team, we were tasked with developing a video game for the Oculus Meta Quest 3. Collaborating closely, we created an immersive VR axe-throwing game set in the depths of the New York sewers. Utilizing the XR Action Kit for Unity, we integrated key features such as teleportation, score tracking, sound effects, and dynamic visual design to enhance the player experience. This project demonstrates my skills in VR game development, interactive design, and collaboration to create an engaging, immersive experience."
              title="Overview"
            />
            <ProjectSkills
              role="Head Programmer"
              organization="NYU"
              softwares={[
                "Blender",
                "Unity (C#)",
                " Meta Oculus Quest 3",
                "Adobe Photoshop",
              ]}
            />
          </section>
          <SectionLine />
          <section id="final-product">
            <SectionTitle title="Final Product" />
            <iframe
              src="https://www.youtube.com/embed/ZRoDA4nME-E"
              className="w-full h-[50vw]"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </section>
        </div>
      </main>
    </>
  );
}

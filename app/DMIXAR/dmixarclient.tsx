"use client";
import Image from "next/image";
import ModalImageGrid from "../components/modalimagegrid";
import VideoAndImage from "../components/videoandimage";
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

const sections = ["Overview", "Problem", "Concept", "Process", "Final Product"];

type Props = {
  folders: Record<string, string[]>;
};

export default function DMIXAR_Client({ folders }: Props) {
  return (
    <>
      <GoBack />
      <div>
        <h1 className="origin-top mt-[2vw] mb-[14vw] ml-[0.5vw]  md:text-[5vw] font-archivo text-black font-bold text-left scale-y-[3] leading-[0.8]">
          What IDM Job Are You? — Interactive Snapchat Campaign
        </h1>
      </div>
      <main className="relative min-h-screen grid grid-cols-1 md:grid-cols-[1fr_3fr] lg:grid-cols-[1fr_3fr] bg-white">
        <ScrollNav sections={sections} />

        {/* Right column — all content */}
        <div className="flex flex-col m-[3vw] gap-5">
          <section id="overview">
            <SectionIntro
              description="While working with the Digital Media Intellect team, I identified a perception challenge affecting student interest in the Integrated Design and Media (IDM) major at New York University. Many prospective students believed the major lacked clear career pathways, leading to hesitation in choosing the program. To address this, I initiated a mini campaign centered around an interactive Snapchat filter called 'What IDM Job Are You?' The goal was to showcase the diverse career possibilities within the major in a fun, shareable format that encouraged students to see themselves in the field."
              title="Overview"
            />
            <ProjectSkills
              role="Lead, Interactive Media Designer, Lens Developer"
              organization="NYU Digital Media Intellect"
              softwares={[
                "Adobe Photoshop",
                "Adobe After Effects",
                "Snapchat Lens Studio",
                "ProCreate",
              ]}
            />
          </section>
          <SectionLine />
          <section id="problem">
            <SectionIntro
              description="The Integrated Design and Media program faced a persistent perception issue: some students believed that pursuing the major could lead to limited job opportunities. This misconception affected recruitment and student confidence in the program’s career outcomes."
              title="Problem"
            />
            <SectionSubtitle title="Campaign Goal" />
            <WorkDescription description="Break the stereotype that IDM leads to limited career opportunities by highlighting the wide range of career paths available to students." />
          </section>
          <SectionLine />
          <section id="concept">
            <SectionIntro
              description="I designed a filter inspired by popular social media trends; specifically the 'What Are You?' style filters commonly used on Snapchat. These filters randomly assign users an identity, role, or category. The idea was to adapt this familiar format into an educational and recruitment-focused experience."
              title="Concept"
            />
            <SectionSubtitle title="Examples" />
            <InstagramShortsGrid
              urls={[
                "https://www.youtube.com/embed/xFuVuA0Hfyw",
                "https://www.youtube.com/embed/zmBHNnt-GDw",
              ]}
            />
            <SectionSubtitle title="Campaign Idea" />
            <WorkDescription description="The filter randomly generated potential career paths associated with the IDM major, such as:" />
            <BulletList
              items={[
                "Product Manager",
                "Creative Director",
                "Game Developer",
                "Web Developer",
                "Multimedia Artist",
                "Project Manager",
                "Software Developer",
                "Graphic Developer",
                "Video Editor",
              ]}
            />
          </section>
          <SectionLine />
          <section id="process">
            <SectionTitle title="Process" />
            <SectionSubtitle title="Designs and Assets" />
            <WorkDescription description="I drew custom visual assets representing different career roles, and animated them." />
            <ModalImageGrid folders={folders} folder="IDMXVR" />
            <SectionSubtitle title="Technicals" />
            <WorkDescription description="I developed the filter using Snapchat’s Lens Studio platform. I programmed the filter logic using Snapchat Lens Studio scripting, implemented randomized job selection functionality, optimized asset sizes to improve performance, and tested compatibility across multiple devices to ensure a smooth and reliable user experience." />
            <ModalImageGrid folders={folders} folder="IDMXVRCODE" />
            <SectionSubtitle title="User Engagement" />
            <WorkDescription description="To increase visibility and validate the concept, I created a promotional video that featured real students using the filter and documenting their experiences. This allowed me to capture authentic user reactions and demonstrate how the interactive tool helped students connect potential careers to the Integrated Design and Media major." />
          </section>
          <SectionLine />
          <section id="final-product">
            <SectionTitle title="Final Product" />
            <VideoAndImage
              videoUrl="https://www.instagram.com/reel/DIO7vJDtIwk/embed"
              imageSrc="/assets/snapcode (1).png"
              imageAlt="snapcode"
            />
          </section>
        </div>
      </main>
    </>
  );
}

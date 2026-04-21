"use client";
import ScrollNav from "../components/scrollnav";
import WorkDescription from "../components/workdescription";
import Image from "next/image";
import BulletList from "../components/bulletedlist";
import StatsGrid from "../components/statsgrid";
import InstaVideoGrid from "../components/instagvideogrid";
import SectionTitle from "../components/sectiontitle";
import SectionIntro from "../components/sectionintro";
import SectionLine from "../components/sectionline";
import ProjectSkills from "../components/projectskills";
import GoBack from "../components/goback";

const sections = ["Overview", "Problem", "Process", "Video"];

type Props = {
  folders: Record<string, string[]>;
};

export default function DMI_Client({}: Props) {
  return (
    <>
      <GoBack />
      <div>
        <h1 className="origin-top mt-[2vw] mb-[14vw] ml-[0.5vw]  md:text-[5vw] font-archivo text-black font-bold text-left scale-y-[3] leading-[0.8]">
          NYU Digital Media Intellect
        </h1>
      </div>
      <main className="relative min-h-screen grid grid-cols-1 md:grid-cols-[1fr_3fr] lg:grid-cols-[1fr_3fr] bg-white">
        <ScrollNav sections={sections} activeColor="text-sky-700" />

        {/* Right column — all content */}
        <div className="flex flex-col m-[3vw] gap-5">
          <section id="overview">
            <SectionIntro
              description="As a Post-Production Editor for the Digital Media Intellect team, I was responsible for editing and refining multimedia content used to promote academic programs, student initiatives, and digital media storytelling projects. My work focused on transforming raw footage into polished, engaging content optimized for social media and digital distribution."
              title="Overview"
            />
            <ProjectSkills
              role="Creative Production Editor"
              organization="NYU Vertically Integrated Projects"
              softwares={[
                "Adobe Creative Suite",
                "Snapchat",
                "Instagram",
                "TikTok",
                "LinkedIn",
              ]}
            />
          </section>
          <SectionLine />
          <section id="problem">
            <SectionIntro
              description="The Digital Media Intellect team identified a need to revitalize the social media presence for the Integrated Design and Media (IDM) program at New York University. The existing content lacked consistent engagement and did not fully represent the experiences, creativity, and diversity of students within the program. As a result, prospective and current students had limited visibility into the day-to-day life and culture of IDM."
              title="Problem"
            />
          </section>
          <SectionLine />
          <section id="process">
            <SectionIntro
              description="To address this challenge, I focused on creating student-centered content that highlighted real experiences within the program."
              title="Process"
            />
            <BulletList
              items={[
                "Proposed and launched a Day in the Life video series to showcase authentic student experiences",
                " Shot, recorded, and edited video content for Instagram and LinkedIn",
                "Led a virtual reality–based marketing initiative to create immersive promotional experiences",
                "Explored emerging media tools to differentiate IDM’s digital presence",
              ]}
            />
          </section>
          <SectionLine />
          <section id="video">
            <SectionTitle title="Video" className="text-sky-700" />
            <InstaVideoGrid
              ids={[
                "DCFN9qryFqt",
                "DF5vJWvi-cq",
                "DGo5hHMNfaW",
                "DIO7vJDtIwk",
                "DRS3ntfEWBo",
                "DDDdmhRKr_c",
              ]}
            />
          </section>
        </div>
      </main>
    </>
  );
}

"use client";
import ProjectSkills from "../components/projectskills";
import ScrollNav from "../components/scrollnav";
import SectionTitle from "../components/sectiontitle";
import InstaVideoGrid from "../components/instagvideogrid";
import WorkDescription from "../components/workdescription";
import SectionLine from "../components/sectionline";

const sections = [
  "Overview",
  "Problem",
  "Process",
  "Video",
  "VR Campaign",
  "Outcome",
];

const outcomes = [
  { label: "Content Reach", stat: "+25%" },
  { label: "Reel Engagement", stat: "+300%" },
  { label: "Overall Engagement", stat: "+44%" },
];

const projectInfo = [
  { label: "Role", value: "Creative Production Editor" },
  { label: "Organization", value: "NYU Vertically Integrated Projects" },
];

const skillsInfo = [
  {
    label: "Software",
    value: [
      "Adobe Creative Suite",
      "Snapchat",
      "Instagram",
      "TikTok",
      "LinkedIn",
    ],
  },
  {
    label: "Skills",
    value: [
      "Social Media Management",
      "Graphic Design",
      "Digital Content Strategy",
      "Cross-Team Coordination",
      "Post-Production Editing",
      "XR Development",
    ],
  },
];

type Props = {
  folders: Record<string, string[]>;
};

export default function DMI_Client({ folders }: Props) {
  return (
    <>
      <div>
        <h1 className="origin-top mt-[2vw] mb-[14vw] ml-[0.5vw]  md:text-[5vw] font-archivo text-black font-bold text-left scale-y-[3] leading-[0.8]">
          NYU Digital Media Intellect
        </h1>
      </div>
      <main className="relative min-h-screen grid grid-cols-1 md:grid-cols-[1fr_3fr] lg:grid-cols-[1fr_3fr] bg-white">
        <ScrollNav sections={sections} activeColor="text-sky-700" />

        {/* Right column — all content */}
        <div className="flex flex-col m-[3vw] gap-15">
          <section id="overview">
            <WorkDescription description="As a Post-Production Editor for the Digital Media Intellect team, I was responsible for editing and refining multimedia content used to promote academic programs, student initiatives, and digital media storytelling projects. My work focused on transforming raw footage into polished, engaging content optimized for social media and digital distribution." />
            <section className="flex flex-col gap-6 md:gap-4">
              <ProjectSkills items={projectInfo} labelColor="text-sky-700" />
              <ProjectSkills items={skillsInfo} labelColor="text-sky-700" />
            </section>
          </section>
          <SectionLine />
          <section id="problem">
            <SectionTitle title="Problem" />
            <WorkDescription description="The Digital Media Intellect team identified a need to revitalize the social media presence for the Integrated Design and Media (IDM) program at New York University. The existing content lacked consistent engagement and did not fully represent the experiences, creativity, and diversity of students within the program. As a result, prospective and current students had limited visibility into the day-to-day life and culture of IDM." />
          </section>
          <SectionLine />
          <section id="process">
            <SectionTitle title="Process" />
            <WorkDescription description="To address this challenge, I focused on creating student-centered content that highlighted real experiences within the program." />
            <ul className="list-disc pl-6 ipadSM:text-[2.8vw] md:text-[1.8vw] lg:text-[1.6vw]  text-black">
              <li>
                Proposed and launched a Day in the Life video series to showcase
                authentic student experiences
              </li>
              <li>
                Shot, recorded, and edited video content for Instagram and
                LinkedIn
              </li>
              <li>
                Led a virtual reality–based marketing initiative to create
                immersive promotional experiences
              </li>
              <li>
                Explored emerging media tools to differentiate IDM’s digital
                presence
              </li>
            </ul>
          </section>
          <SectionLine />
          <section id="video">
            <SectionTitle title="Video" />
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
          <SectionLine />
          <section id="vrcampaign">
            <SectionTitle title="VR Campaign" />
            <WorkDescription description="I led a unique initative exploring the place virtual reality has for the future of campaigns with Digital Media Intellect. Explore the full brief." />
          </section>
          <SectionLine />
          <section id="outcome">
            <SectionTitle title="Outcome" />
            <div className="w-full mx-auto flex flex-row flex-wrap gap-4 justify-center items-center">
              {outcomes.map(({ label, stat }) => (
                <div key={label} className="bg-gray-100 rounded-2xl p-4 md:p-6">
                  <p className="text-[3.5vw] font-bold scale-y-[3] md:text-[1.5vw] lg:mb-[1.5vw] font-bold uppercase tracking-widest opacity-70 text-sky-700">
                    {label}
                  </p>
                  <p className="text-[8vw] md:text-[4vw] lg:text-[3vw] justify-self-center text-black leading-none">
                    {stat}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

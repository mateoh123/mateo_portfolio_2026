"use client";
import ProjectSkills from "../components/projectskills";
import WorkDescription from "../components/workdescription";
import GoBack from "../components/goback";
import MainContentContainer from "../components/maincontentcontainer";
import LeftContentContainer from "../components/leftcontentcontainer";
import RightContentContainer from "../components/rightcontentcontainer";
import LegAccordion from "../components/LegAccordian";
import MainWorkTitle from "../components/mainworktitle";
import SectionTitle from "../components/sectiontitle";

type Props = {
  folders: Record<string, string[]>;
};

export default function AXE_Client({}: Props) {
  return (
    <>
      <GoBack />
      <MainContentContainer>
        <LeftContentContainer>
          <section>
            <iframe
              src="https://www.youtube.com/embed/ZRoDA4nME-E"
              className="w-full h-[50vw]"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </section>
        </LeftContentContainer>

        <RightContentContainer>
          <section id="overview">
            <MainWorkTitle title="VR Axe Throwing" />
            <WorkDescription description="As part of my XR team, we were tasked with developing a video game for the Oculus Meta Quest 3. Collaborating closely, we created an immersive VR axe-throwing game set in the depths of the New York sewers. Utilizing the XR Action Kit for Unity, we integrated key features such as teleportation, score tracking, sound effects, and dynamic visual design to enhance the player experience. This project demonstrates my skills in VR game development, interactive design, and collaboration to create an engaging, immersive experience." />
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
          <div className="-mx-5">
            <LegAccordion
              topLegSrc="/assets/TopLegAccordian.png"
              bottomLegSrc="/assets/BottomLegAccordian.png"
            >
              <SectionTitle title="Why?" />
              <WorkDescription description="Virtual reality is an emerging medium, and developing this VR axe-throwing game allowed me to gain hands-on experience within that space. By designing and building the project, I was able to explore immersive interaction, spatial design, and user engagement in a three-dimensional environment, while strengthening my technical and creative skills in a rapidly growing field." />
            </LegAccordion>
          </div>
        </RightContentContainer>
      </MainContentContainer>
    </>
  );
}

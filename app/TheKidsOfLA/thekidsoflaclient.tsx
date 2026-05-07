"use client";
import ModalImageGrid from "../components/modalimagegrid";
import WorkDescription from "../components/workdescription";
import GoBack from "../components/goback";
import MainWorkTitle from "../components/mainworktitle";
import MainContentContainer from "../components/maincontentcontainer";
import LeftContentContainer from "../components/leftcontentcontainer";
import RightContentContainer from "../components/rightcontentcontainer";
import ProjectSkills from "../components/projectskills";

type Props = {
  folders: Record<string, string[]>;
};

export default function TheKidsofLA_Client({ folders }: Props) {
  return (
    <>
      <GoBack />
      <MainContentContainer>
        <LeftContentContainer>
          <section>
            <ModalImageGrid folders={folders} folder="TheKidsOfLAImages" />
          </section>
        </LeftContentContainer>
        <RightContentContainer>
          <MainWorkTitle title="The Kids Of LA" />
          <WorkDescription description="Inspired by the vibrant, surreal 'acid trip' aesthetic that emerged during the 2020s quarantine, I created this project in Downtown LA on my last day in California. These photos are a tribute to the moments I want to cherish forever and the friends I hope will remain a part of my life. Through bold, psychedelic color grading, I aimed to capture the joy and optimism of the day, with compositions that frame the limitless sky as a metaphor for boundless possibilities and a hopeful future." />
          <ProjectSkills
            role="Creative Director/Photographer"
            organization="Personal Project"
            softwares={["Adobe Photoshop", "Adobe Illustrator"]}
          />
        </RightContentContainer>
      </MainContentContainer>
    </>
  );
}

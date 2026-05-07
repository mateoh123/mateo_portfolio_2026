"use client";
import ModalImageGrid from "../components/modalimagegrid";
import GoBack from "../components/goback";
import MainWorkTitle from "../components/mainworktitle";
import MainContentContainer from "../components/maincontentcontainer";
import LeftContentContainer from "../components/leftcontentcontainer";
import RightContentContainer from "../components/rightcontentcontainer";
import ProjectSkills from "../components/projectskills";

type Props = {
  folders: Record<string, string[]>;
};

export default function PortraitsAndHeadshots_Client({ folders }: Props) {
  return (
    <>
      <GoBack />
      <MainContentContainer>
        <LeftContentContainer>
          <section>
            <ModalImageGrid folders={folders} folder="HeadshotImages" />
          </section>
        </LeftContentContainer>
        <RightContentContainer>
          <MainWorkTitle title="Portraits And Headshots" />
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

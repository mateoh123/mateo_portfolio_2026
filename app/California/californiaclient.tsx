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

export default function California_Client({ folders }: Props) {
  return (
    <>
      <GoBack />
      <MainContentContainer>
        <LeftContentContainer>
          <section>
            <ModalImageGrid folders={folders} folder="CaliforniaImages" />
          </section>
        </LeftContentContainer>
        <RightContentContainer>
          <MainWorkTitle title="California" />
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

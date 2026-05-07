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

export default function SoniconAva_Client({ folders }: Props) {
  return (
    <>
      <GoBack />
      <MainContentContainer>
        <LeftContentContainer>
          <section>
            <ModalImageGrid folders={folders} folder="SoniconAvaImages" />
          </section>
        </LeftContentContainer>
        <RightContentContainer>
          <MainWorkTitle title="Sonicon Ava" />
          <WorkDescription description="On the final day of my freshman year, while exploring with friends, we came across a serene waterfront at the Brooklyn Promenade. Inspired by the moment's spontaneity, I experimented with the interplay of unsteady rocks, exposure, and shutter speed. The result was a series of photos that captured dynamic, light-inspired patterns—evoking a mesmerizing light show that reminded me of the vibrant energy of my friend Ava." />
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

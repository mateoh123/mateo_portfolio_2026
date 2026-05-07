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

export default function CreationOfFoam_Client({ folders }: Props) {
  return (
    <>
      <GoBack />
      <MainContentContainer>
        <LeftContentContainer>
          <section>
            <ModalImageGrid folders={folders} folder="OutFromSeaFoamImages" />
          </section>
        </LeftContentContainer>
        <RightContentContainer>
          <MainWorkTitle title="Creation Of Foam" />
          <WorkDescription description="Drawing inspiration from the 'Office Siren' aesthetic and the iconic painting 'The Birth of Aphrodite', I crafted a unique take on beach photography. By blending elegance and surrealism, I used Photoshop to add water droplets, inviting viewers to not just see the scene but feel immersed in it. Through iridescent colors and dynamic compositions, I aimed to bring these photos to life, evoking both the essence of their vibrant setting and a sense of ethereal beauty." />
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

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

export default function BigCity_Client({ folders }: Props) {
  return (
    <>
      <GoBack />
      <MainContentContainer>
        <LeftContentContainer>
          <section>
            <ModalImageGrid folders={folders} folder="BigCityImages" />
          </section>
        </LeftContentContainer>
        <RightContentContainer>
          <MainWorkTitle title="Urban Jungle" />
          <WorkDescription description="Inspired by the multifaceted nature of New York City, I set out to capture its contrasting energies through photography. In Central Park, I focused on the serene, gradual growth of nature, showcasing its quiet beauty. In contrast, I photographed the bustling steps of The Met, an iconic cultural landmark that embodies the city's vibrant and dynamic pace. Together, these images illustrate the striking duality of life in New York City, a harmonious blend of tranquility and intensity." />
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

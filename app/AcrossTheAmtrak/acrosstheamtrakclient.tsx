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

export default function AcrossTheAmtrak_Client({ folders }: Props) {
  return (
    <>
      <GoBack />
      <MainContentContainer>
        <LeftContentContainer>
          <section>
            <ModalImageGrid folders={folders} folder="AcrossTheAmtrakImages" />
          </section>
        </LeftContentContainer>
        <RightContentContainer>
          <MainWorkTitle title="Across The Amtrak" />
          <WorkDescription description="On my journey back to New York City for the new school year, I traveled cross-country on Amtrak, capturing moments along the way. This experience allowed me to explore new places like New Mexico and revisit new favorites like Chicago, that now hold bittersweet memories, of love I want to rekindle in the future and pain I hope to never feel again. Through these photos, I commemorated a unique adventure that blended discovery and nostalgia, documenting the beauty of the landscapes and cities that shaped my trip." />
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

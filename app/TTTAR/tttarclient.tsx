"use client";
import ModalImageGrid from "../components/modalimagegrid";
import ProjectSkills from "../components/projectskills";
import SectionTitle from "../components/sectiontitle";
import SectionSubtitle from "../components/sectionsubtitle";
import SectionIntro from "../components/sectionintro";
import InstagramShortsGrid from "../components/instagramshortsgrid";
import BulletList from "../components/bulletedlist";
import WorkDescription from "../components/workdescription";
import SectionLine from "../components/sectionline";
import GoBack from "../components/goback";
import MainContentContainer from "../components/maincontentcontainer";
import LeftContentContainer from "../components/leftcontentcontainer";
import RightContentContainer from "../components/rightcontentcontainer";
import MainWorkTitle from "../components/mainworktitle";
import LegAccordion from "../components/LegAccordian";

type Props = {
  folders: Record<string, string[]>;
};

export default function TTTAR_Client({ folders }: Props) {
  return (
    <>
      <GoBack />
      <MainContentContainer>
        <LeftContentContainer>
          <InstagramShortsGrid
            urls={[
              "https://www.youtube.com/embed/EaON7ISVxIw",
              "https://www.youtube.com/embed/s5du9-7cQVw",
              "https://www.youtube.com/embed/LrOQFNh00R4",
            ]}
          />
        </LeftContentContainer>
        <RightContentContainer>
          <section id="overview">
            <div className="pt-5 mb-5">
              <MainWorkTitle title="Twenty To Ten: AR Experience" />
            </div>
            <WorkDescription description="“Twenty To Ten” is a photo series I created reflecting on the lack of growth I felt across different stages of my life, while still acknowledging how thrilling that journey has been. I wanted the images to feel “alive” to reinforce this tension, so I animated the photos. By using Snapchat’s Lens Studio, I was able to extend that sense of movement and share the feeling of “aliveness” with others." />
            <ProjectSkills
              role="Creative Technologist, Photographer, AR Developer"
              organization="Personal Project"
              softwares={[
                "Adobe Photoshop",
                "Adobe After Effects",
                "Snapchat Lens Studio",
                "Blender",
              ]}
            />
          </section>
          <div className="-mx-5">
            <LegAccordion
              topLegSrc="/assets/TopLegAccordian.png"
              bottomLegSrc="/assets/BottomLegAccordian.png"
            >
              <section id="process">
                <SectionTitle title="Process" />
                <SectionSubtitle title="Conceptulization" />
                <WorkDescription description="After completing the 'Twenty To Ten' photo series, I reflected on how the visual mood and themes could be expanded beyond still imagery. I wanted viewers to experience the photos as living moments rather than static scenes." />
                <ModalImageGrid folders={folders} folder="TTTAR" />
                <SectionSubtitle title="Animation" />
                <WorkDescription description="I used Adobe After Effects to animate the photographs, adding motion and depth to the original images." />
                <BulletList
                  items={[
                    "Created motion animations and visual transitions",
                    "Exported animated assets for AR integration",
                  ]}
                />
                <SectionSubtitle title="Lens Studio Development" />
                <WorkDescription description="Once the animations were complete, I integrated them into an augmented reality environment using Snapchat Lens Studio." />
                <BulletList
                  items={[
                    "Imported animated assets into Lens Studio",
                    "Optimized assets for mobile performance",
                    "Programmed interactive behaviors",
                  ]}
                />
              </section>
            </LegAccordion>
          </div>
        </RightContentContainer>
      </MainContentContainer>
    </>
  );
}

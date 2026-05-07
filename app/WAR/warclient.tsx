"use client";
import ModalImageGrid from "../components/modalimagegrid";
import ProjectSkills from "../components/projectskills";
import SectionTitle from "../components/sectiontitle";
import SectionSubtitle from "../components/sectionsubtitle";
import InstagramShortsGrid from "../components/instagramshortsgrid";
import WorkDescription from "../components/workdescription";
import SectionLine from "../components/sectionline";
import GoBack from "../components/goback";
import MainContentContainer from "../components/maincontentcontainer";
import LeftContentContainer from "../components/leftcontentcontainer";
import RightContentContainer from "../components/rightcontentcontainer";
import MainWorkTitle from "../components/mainworktitle";
import LegAccordion from "../components/LegAccordian";
import VideoAndImage from "../components/videoandimage";

type Props = {
  folders: Record<string, string[]>;
};

export default function WAR_Client({ folders }: Props) {
  return (
    <>
      <GoBack />
      <MainContentContainer>
        <LeftContentContainer>
          <VideoAndImage
            videoUrl="https://www.youtube.com/embed/w-Og1LGbivg"
            imageSrc="/assets/wiredarmagazinesnapcode.png"
            imageAlt="snapcode"
          />
        </LeftContentContainer>
        <RightContentContainer>
          <section id="overview">
            <MainWorkTitle title="WIRED: AR Magazine" />
            <WorkDescription description="I animated WIRED magazine’s 'The Influence Machine' edition to explore how motion and augmented reality can push the boundaries of traditional magazine design. I integrated the animation into an augmented reality experience using a Snapchat lens, allowing viewers to interact with the cover through their mobile devices." />
            <ProjectSkills
              role="Sole Motion Designer, AR Developer, Creative Technologist"
              organization="Personal Project"
              softwares={[
                "Adobe Photoshop",
                "Adobe Premiere Pro",
                "Snapchat Lens Studio",
              ]}
            />
          </section>
          <div className="-mx-5">
            <LegAccordion
              topLegSrc="/assets/TopLegAccordian.png"
              bottomLegSrc="/assets/BottomLegAccordian.png"
            >
              <section>
                <SectionTitle title="Why" />
                <WorkDescription description="I chose to transform the The WIRED Influencer Machine cover into an augmented reality experience to make its ideas more tangible and engaging. The original cover critiques how digital platforms shape identity and visibility, and by using AR through Snapchat Lens Studio, I was able to bring that concept to life. This approach allowed me to move beyond a static image and create something interactive, where viewers can experience the idea of the “influencer machine” in a more immersive and dynamic way." />
              </section>
              <SectionLine />
              <section id="process">
                <SectionTitle title="Process" />
                <SectionSubtitle title="Photoshop" />
                <WorkDescription description="I used Adobe Photoshop to both create a blank version of the cover to allow certain elements to seamlessly move, and to mask out said elements I wanted to move." />
                <SectionSubtitle title="After Effects" />
                <WorkDescription description="I used Adobe After Effects to make said desired elements move. Using a mix of cascaded timing, rotation and key-framing I was able to bring the ever chaotic nature of the magazine cover to life." />
                <ModalImageGrid folders={folders} folder="WAR" />
              </section>
            </LegAccordion>
          </div>
        </RightContentContainer>
      </MainContentContainer>
    </>
  );
}

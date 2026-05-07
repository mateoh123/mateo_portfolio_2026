"use client";
import ModalImageGrid from "../components/modalimagegrid";
import ProjectSkills from "../components/projectskills";
import BulletList from "../components/bulletedlist";
import SectionTitle from "../components/sectiontitle";
import SectionSubtitle from "../components/sectionsubtitle";
import MainWorkTitle from "../components/mainworktitle";
import LegAccordion from "../components/LegAccordian";
import WorkDescription from "../components/workdescription";
import GoBack from "../components/goback";
import YoutubeAndImage from "../components/youtubeandimage";
import MainContentContainer from "../components/maincontentcontainer";
import LeftContentContainer from "../components/leftcontentcontainer";
import RightContentContainer from "../components/rightcontentcontainer";

type Props = {
  folders: Record<string, string[]>;
};

export default function AAC_Client({ folders }: Props) {
  return (
    <>
      <GoBack />
      <MainContentContainer>
        <LeftContentContainer>
          <section>
            <YoutubeAndImage
              videoUrl="https://www.youtube.com/embed/F95KiOvWUeI"
              imageSrc="/assets/ctrlcover.jpg"
              imageAlt="description"
              aspectRatio="landscape"
            />
            <YoutubeAndImage
              videoUrl="https://www.youtube.com/embed/gwtZTxfRPV4"
              imageSrc="/assets/soscover.jpeg"
              imageAlt="description"
              aspectRatio="landscape"
            />
          </section>
        </LeftContentContainer>
        <RightContentContainer>
          <section>
            <MainWorkTitle title="Animated Album Cover" />
            <WorkDescription description="Imagine if your favorite artist's album could move? I decided to explore how motion design and AR can serve as alternative promotional tools for musicians in the digital era, where visual identity and shareable content are essential to audience engagement." />

            <ProjectSkills
              role="Solo Designer/Developer"
              organization="Personal Project"
              softwares={[
                "Adobe After Effects",
                "Adobe Photoshop",
                "Adobe Premiere Pro",
                "Snapchat Lens Studio",
              ]}
            />
          </section>
          <section>
            <div className="-mx-5">
              <LegAccordion
                topLegSrc="/assets/TopLegAccordian.png"
                bottomLegSrc="/assets/BottomLegAccordian.png"
              >
                <section>
                  <SectionTitle title="Why?" />
                  <SectionSubtitle title="Signifigant Example" />
                  <WorkDescription description="When focusing on the concepts that would go into bringing the album to life, I listened to the albums from start to finish, pulling key imagery from the lyrics and overall themes derived from the album's thesis. " />
                  <BulletList
                    items={[
                      "(Monarch Butterflies) Butterflies represent letting go and accepting a lack of control, the albums central theme",
                      "They also serve as a visual callback to SZA’s Love Galore music video.",
                      "(Music Video Screens) Confronting different versions of yourself is a subtheme of the album, just like eye screens can be windows to one's soul.",
                      "Having her different music videos displayed on the screens not only serves as a subtle teaser for her various songs but also physically represents how she changes.",
                      "This simultaneously can draw users to check out her music videos, providing direct views and likes. ",
                    ]}
                  />
                </section>
                <section>
                  <SectionTitle title="Process" />
                  <SectionSubtitle title="Asset Preparation" />
                  <WorkDescription description="I import the album artwork into Adobe Photoshop and prepare it for animation by isolating individual visual elements." />
                  <BulletList
                    items={[
                      "Masking and separating characters, objects, and backgrounds",
                      "Removing or reconstructing background elements",
                      "Cleaning edges and refining layers",
                      "Creating individual assets for motion",
                    ]}
                  />
                  <SectionSubtitle title="Animation" />
                  <WorkDescription description="Once the assets are prepared, I move into Adobe After Effects to begin animating the composition. Using keyframing techniques, I create motion that reflects the personality of the album." />
                  <ModalImageGrid folders={folders} folder="AAAAfterEffects" />
                  <SectionSubtitle title="AR Integration" />
                  <WorkDescription description="To expand the experience beyond traditional video, I import the animation into Snapchat Lens Studio and build an interactive augmented reality lens." />
                </section>
              </LegAccordion>
            </div>
          </section>
        </RightContentContainer>
      </MainContentContainer>
    </>
  );
}

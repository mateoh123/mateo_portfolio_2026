"use client";
import IntroSection from "../components/sectionintro";
import ModalImageGrid from "../components/modalimagegrid";
import ProjectSkills from "../components/projectskills";
import BulletList from "../components/bulletedlist";
import SectionTitle from "../components/sectiontitle";
import SectionSubtitle from "../components/sectionsubtitle";
import InstagramShortsGrid from "../components/instagramshortsgrid";
import LegAccordion from "../components/LegAccordian";
import WorkDescription from "../components/workdescription";
import SectionLine from "../components/sectionline";
import GoBack from "../components/goback";
import YoutubeAndImage from "../components/youtubeandimage";

type Props = {
  folders: Record<string, string[]>;
};

export default function AAC_Client({ folders }: Props) {
  return (
    <>
      <GoBack />
      <main className="relative min-h-screen grid grid-cols-1 md:grid-cols-[2fr_1fr] bg-white overflow-visible items-start">
        <div className=" p-2 w-full">
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
        </div>
        <div className="flex flex-col">
          <section className="p-5">
            <SectionTitle title="Animated Album Cover" />
            <WorkDescription description="The goal was to reimagine static album artwork as dynamic visual experiences that extend the narrative of the music. To push the concept further, I integrated these animations into Snapchat Lens Studio, transforming them into interactive augmented reality (AR) experiences that allow users to engage with album visuals in a more immersive way. This project explores how motion design and AR can serve as alternative promotional tools for musicians in the digital era, where visual identity and shareable content are essential to audience engagement." />

            <ProjectSkills
              role="Designer & Developer"
              organization="NYU"
              softwares={["After Effects", "Lens Studio", "Figma"]}
            />
          </section>
          <section>
            <LegAccordion
              topLegSrc="/assets/TopLegAccordian.png"
              bottomLegSrc="/assets/BottomLegAccordian.png"
            >
              <IntroSection
                description="Album covers are traditionally static images, yet music consumption today happens in highly visual, social, and interactive environments. Artists and marketers are constantly searching for new ways to capture attention and create memorable brand moments."
                title="Problem"
              />
              <SectionLine />
              <section id="concept">
                <IntroSection
                  description="I developed a workflow to reinterpret popular album covers as animated visuals that reflect the tone, themes, and emotional atmosphere of the music."
                  title="Concept"
                />
                <SectionSubtitle title="Examples" />
                <InstagramShortsGrid
                  urls={[
                    "https://www.youtube.com/embed/WuDacG50Yhw",
                    "https://www.youtube.com/embed/vGy0ynkUVfQ",
                    "https://www.youtube.com/embed/QMAeZx_BsIc",
                  ]}
                />
              </section>
              <SectionLine />
              <section id="process">
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
          </section>
        </div>
        {/* <div className="w-full desktopSM:col-start-2 md:col-end-3 md:row-start-2 overflow-visible z-50">
          <LegAccordion
            topLegSrc="/assets/TopLegAccordian.png"
            bottomLegSrc="/assets/BottomLegAccordian.png"
          >
            <IntroSection
              description="Album covers are traditionally static images, yet music consumption today happens in highly visual, social, and interactive environments. Artists and marketers are constantly searching for new ways to capture attention and create memorable brand moments."
              title="Problem"
            />
            <SectionLine />
            <section id="concept">
              <IntroSection
                description="I developed a workflow to reinterpret popular album covers as animated visuals that reflect the tone, themes, and emotional atmosphere of the music."
                title="Concept"
              />
              <SectionSubtitle title="Examples" />
              <InstagramShortsGrid
                urls={[
                  "https://www.youtube.com/embed/WuDacG50Yhw",
                  "https://www.youtube.com/embed/vGy0ynkUVfQ",
                  "https://www.youtube.com/embed/QMAeZx_BsIc",
                ]}
              />
            </section>
            <SectionLine />
            <section id="process">
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
        </div> */}
      </main>
    </>
  );
}

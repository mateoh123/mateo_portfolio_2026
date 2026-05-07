"use client";
import ModalImageGrid from "../components/modalimagegrid";
import VideoAndImage from "../components/videoandimage";
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

export default function DMIXAR_Client({ folders }: Props) {
  return (
    <>
      <GoBack />
      <MainContentContainer>
        <LeftContentContainer>
          <section>
            <VideoAndImage
              videoUrl="https://www.instagram.com/reel/DIO7vJDtIwk/embed"
              imageSrc="/assets/snapcode (1).png"
              imageAlt="snapcode"
            />
          </section>
        </LeftContentContainer>
        <RightContentContainer>
          <section>
            <div className="pt-5 mb-5">
              <MainWorkTitle title=" What IDM Job Are You?" />
            </div>
            <WorkDescription description="I created a mini campaign centered around an interactive Snapchat filter called 'What IDM Job Are You?' The goal was to showcase the diverse career possibilities within the major in a fun, shareable format that encouraged students to see themselves in the field." />

            <ProjectSkills
              role="Lead, Interactive Media Designer, Lens Developer"
              organization="NYU Digital Media Intellect"
              softwares={[
                "Adobe Photoshop",
                "Adobe After Effects",
                "Snapchat Lens Studio",
                "ProCreate",
              ]}
            />
          </section>
          <div className="-mx-5">
            <LegAccordion
              topLegSrc="/assets/TopLegAccordian.png"
              bottomLegSrc="/assets/BottomLegAccordian.png"
            >
              <section id="problem">
                <SectionTitle title="Problem" />
                <WorkDescription description="The Integrated Design and Media program faced a persistent perception issue: some students believed that pursuing the major could lead to limited job opportunities. This misconception affected recruitment and student confidence in the program’s career outcomes." />
                <SectionSubtitle title="Campaign Goal" />
                <WorkDescription description="Break the stereotype that IDM leads to limited career opportunities by highlighting the wide range of career paths available to students." />
              </section>
              <SectionLine />
              <section id="concept">
                <SectionTitle title="Concept" />
                <WorkDescription description="I designed a filter inspired by popular social media trends; specifically the 'What Are You?' style filters commonly used on Snapchat. These filters randomly assign users an identity, role, or category. The idea was to adapt this familiar format into an educational and recruitment-focused experience." />
                <SectionSubtitle title="Examples" />
                <InstagramShortsGrid
                  urls={[
                    "https://www.youtube.com/embed/xFuVuA0Hfyw",
                    "https://www.youtube.com/embed/zmBHNnt-GDw",
                  ]}
                />
                <SectionSubtitle title="Campaign Idea" />
                <WorkDescription description="The filter randomly generated potential career paths associated with the IDM major, such as:" />
                <BulletList
                  items={[
                    "Product Manager",
                    "Creative Director",
                    "Game Developer",
                    "Web Developer",
                    "Multimedia Artist",
                    "Project Manager",
                    "Software Developer",
                    "Graphic Developer",
                    "Video Editor",
                  ]}
                />
              </section>
              <SectionLine />
              <section id="process">
                <SectionTitle title="Process" />
                <SectionSubtitle title="Designs and Assets" />
                <WorkDescription description="I created custom visual assets to represent different career roles and brought them to life through animation. The IDM major strongly emphasizes a DIY culture when guiding students, and designing these assets myself aligns with that hands-on, self-driven approach." />
                <ModalImageGrid folders={folders} folder="IDMXVR" />
                <SectionSubtitle title="Technicals" />
                <WorkDescription description="I developed the filter using Snapchat’s Lens Studio platform. As both Lens Studio and Snapchat are widely used within IDM, they felt like a natural fit for the project. Because the platform is one of the most accessible entry points into art and technology for students, using it for this campaign allowed me to introduce prospective students to a tool they may use in the future, while also creating something nostalgic and familiar for current IDM students." />
                <ModalImageGrid folders={folders} folder="IDMXVRCODE" />
                <SectionSubtitle title="User Engagement" />
                <WorkDescription description="To increase visibility and validate the concept, I created a promotional video that featured real students using the filter and documenting their experiences. This allowed me to capture authentic user reactions and demonstrate how the interactive tool helped students connect potential careers to the Integrated Design and Media major." />
              </section>
            </LegAccordion>
          </div>
        </RightContentContainer>
      </MainContentContainer>
    </>
  );
}

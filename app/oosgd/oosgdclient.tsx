"use client";
import ModalImageGrid from "../components/modalimagegrid";
import ProjectSkills from "../components/projectskills";
import InstaVideoGrid from "../components/instagvideogrid";
import WorkDescription from "../components/workdescription";
import GoBack from "../components/goback";
import MainWorkTitle from "../components/mainworktitle";
import SectionTitle from "../components/sectiontitle";
import BulletList from "../components/bulletedlist";
import MainContentContainer from "../components/maincontentcontainer";
import LeftContentContainer from "../components/leftcontentcontainer";
import RightContentContainer from "../components/rightcontentcontainer";
import LegAccordion from "../components/LegAccordian";

type Props = {
  folders: Record<string, string[]>;
};

export default function OOSGD_Client({ folders }: Props) {
  return (
    <>
      <GoBack />
      <MainContentContainer>
        <LeftContentContainer>
          <section>
            <ModalImageGrid folders={folders} folder="OfficeOfSustainability" />
            <ModalImageGrid
              folders={folders}
              folder="OfficeOfSustainabilityLandscape"
            />
            <InstaVideoGrid
              ids={[
                "DR2KIKrkalE",
                "DRfNu6HgXQ3",
                "DQesQrzkYDu",
                "DPg6MIKCprt",
                "DN5qhoKgRru",
              ]}
            />
          </section>
        </LeftContentContainer>
        <RightContentContainer>
          <div className="pt-5 mb-5">
            <MainWorkTitle title="NYU Office Of Sustainability" />
          </div>
          <WorkDescription description="My role focused on maintaining a consistent digital presence, improving internal communication workflows, and designing visual assets that made sustainability messaging more accessible and engaging." />
          <ProjectSkills
            role="Communications Coordinator"
            organization="NYU Office of Sustainability"
            softwares={[
              "Adobe Photoshop",
              "Canva",
              "Google Sheets",
              "Instagram",
              "LinkedIn",
              "Wordpress",
            ]}
          />
          <div className="-mx-5">
            <LegAccordion
              topLegSrc="/assets/TopLegAccordian.png"
              bottomLegSrc="/assets/BottomLegAccordian.png"
            >
              <SectionTitle title="Why?" />
              <BulletList
                items={[
                  "NYU Green branding colors include, light green, various purples, and teal",
                  "The branding colors are consistantly used as the background color to quickly signify to the user who we are",
                  "Large majority of content is tips/information surrounding sustainability efforts around NYU and personal tips",
                  "Minial visual clutter, as social media posts the main goal is to get our points across within seconds",
                  "Bold fonts, visual breathing room and large line heights, reduces congestion and allows the user to actually see displayed content",
                ]}
              />
            </LegAccordion>
          </div>
        </RightContentContainer>
      </MainContentContainer>
    </>
  );
}

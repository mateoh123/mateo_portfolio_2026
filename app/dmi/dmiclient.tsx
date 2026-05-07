"use client";
import MainWorkTitle from "../components/mainworktitle";
import BulletList from "../components/bulletedlist";
import InstaVideoGrid from "../components/instagvideogrid";
import SectionIntro from "../components/sectionintro";
import SectionLine from "../components/sectionline";
import ProjectSkills from "../components/projectskills";
import GoBack from "../components/goback";
import WorkDescription from "../components/workdescription";
import LegAccordion from "../components/LegAccordian";
import MainContentContainer from "../components/maincontentcontainer";
import LeftContentContainer from "../components/leftcontentcontainer";
import RightContentContainer from "../components/rightcontentcontainer";
import SectionSubtitle from "../components/sectionsubtitle";
import ModalImageGrid from "../components/modalimagegrid";

type Props = {
  folders: Record<string, string[]>;
};

export default function DMI_Client({ folders }: Props) {
  return (
    <>
      <GoBack />
      <MainContentContainer>
        <LeftContentContainer>
          <section>
            <InstaVideoGrid
              ids={[
                "DCFN9qryFqt",
                "DF5vJWvi-cq",
                "DGo5hHMNfaW",
                "DIO7vJDtIwk",
                "DRS3ntfEWBo",
                "DDDdmhRKr_c",
              ]}
            />
          </section>
        </LeftContentContainer>
        <RightContentContainer>
          <div className="pt-5 mb-5">
            <MainWorkTitle title="Digital Media Intellect" />
          </div>
          <WorkDescription description="As a Post-Production Editor for the Digital Media Intellect Team, I was responsible for editing and refining video content made for our socials. My role ended up expanding beyond just post-production. I had the opportunity to work on a new initiative focused on creating 'Day in the Life' video content. Ultimately, boosting our reach by 200% and engagement by 30%." />
          <ProjectSkills
            role="Creative Production Editor"
            organization="NYU Vertically Integrated Projects"
            softwares={[
              "Adobe Creative Suite",
              "Snapchat",
              "Instagram",
              "TikTok",
              "LinkedIn",
            ]}
          />

          <section>
            <div className="-mx-5">
              <LegAccordion
                topLegSrc="/assets/TopLegAccordian.png"
                bottomLegSrc="/assets/BottomLegAccordian.png"
              >
                <section id="problem">
                  <SectionIntro
                    description="The Digital Media Intellect team identified a need to revitalize the social media presence for the Integrated Design and Media (IDM) program at New York University. The existing content lacked consistent engagement and did not fully represent the experiences, creativity, and diversity of students within the program. As a result, prospective and current students had limited visibility into the day-to-day life and culture of IDM."
                    title="Problem"
                  />
                </section>
                <SectionLine />
                <section>
                  <SectionIntro
                    description="To address this challenge, I focused on creating student-centered content that highlighted real experiences within the program."
                    title="Process"
                  />
                  <BulletList
                    items={[
                      "Proposed and launched a Day in the Life video series to showcase authentic student experiences",
                      " Shot, recorded, and edited video content for Instagram and LinkedIn",
                      "Led a virtual reality–based marketing initiative to create immersive promotional experiences",
                      "Explored emerging media tools to differentiate IDM’s digital presence",
                    ]}
                  />
                  <SectionSubtitle title="Asset Preparation" />
                  <WorkDescription description="To make the video further engaging, I make custom assets revolving the students life to accompany their voiceover. Whether thats photoshoped images, images of their work or overall miscellaneous content. The custom assets are integral to keep the engagement of the user. " />
                  <ModalImageGrid
                    folders={folders}
                    folder="DigitalMediaIntellect"
                  />
                  <SectionSubtitle title="Video Editing" />
                  <WorkDescription description="I then edit the video in Adobe Photoshop, focusing on keeping my timeline clean and assets in place. I match them up with sounds and effects to enhance the engaging effects." />
                </section>
              </LegAccordion>
            </div>
          </section>
        </RightContentContainer>
      </MainContentContainer>
    </>
  );
}

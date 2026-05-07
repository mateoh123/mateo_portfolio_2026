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

export default function VotingIsCool_Client({ folders }: Props) {
  return (
    <>
      <GoBack />
      <MainContentContainer>
        <LeftContentContainer>
          <section>
            <ModalImageGrid folders={folders} folder="VotingIsCoolImages" />
          </section>
        </LeftContentContainer>
        <RightContentContainer>
          <MainWorkTitle title="Voting Is Cool" />
          <WorkDescription description="This project began as a conversation with a friend about how to make voting more appealing to younger audiences. Inspired by the clean, elegant aesthetic of clothing campaigns from brands like ZARA and H&M, the initial concept was to create a minimalist and sophisticated series urging people to vote. However, the idea evolved into a whimsical and playful approach, designed to resonate with a broader audience. By focusing on fun and lighthearted visuals, the photos use selective coloring to highlight the 'I Voted' stickers. This intentional design choice draws the audience’s attention to the sticker, subtly encouraging civic engagement while keeping the tone approachable and memorable." />
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

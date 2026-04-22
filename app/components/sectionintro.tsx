import SectionTitle from "./sectiontitle";
import WorkDescription from "./workdescription";

type IntroProps = {
  description: string;
  title: string;
};

export default function SectionIntro({ title, description }: IntroProps) {
  return (
    <>
      <div className="flex flex-col mb-5">
        <SectionTitle title={title} />
        <WorkDescription description={description} />
      </div>
    </>
  );
}

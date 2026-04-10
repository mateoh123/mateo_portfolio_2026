type SectionTitleProps = {
  title: string;
};

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <h1 className="mb-[16vw] xs:mt-[5vw] md:mt-[0vw] lg:mt-[-1vw] ipadSM:text-[10vw] md:mb-[4vw] lg:mb-[3vw] ml-[0.5vw] md:text-[4vw] lg:text-[3vw] font-archivo text-black font-bold uppercase tracking-widest text-left scale-y-[2.5] leading-[0.8]">
      {title}
    </h1>
  );
}

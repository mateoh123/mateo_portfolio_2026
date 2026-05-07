type SectionTitleProps = {
  title: string;
  className?: string;
};

export default function MainWorkTitle({ title }: SectionTitleProps) {
  return (
    <h1
      className={
        "text-2xl ipad:text-3xl 2xl:text-[2vw] scale-y-[2] font-archivo text-black font-medium uppercase text-left opacity-70 leading-none pb-5 pt-3 tracking-wide"
      }
    >
      {title}
    </h1>
  );
}

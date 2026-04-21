type SectionTitleProps = {
  title: string;
  className?: string;
};

export default function SectionTitle({
  title,
  className = "",
}: SectionTitleProps) {
  return (
    <h1
      className={
        "text-4xl ipad:text-5xl 2xl:text-[3.5vw] font-archivo text-black font-bold uppercase tracking-widest text-left opacity-40 ${className}"
      }
    >
      {title}
    </h1>
  );
}

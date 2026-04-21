type SectionSubtitleProps = {
  title: string;
  className?: string;
};

export default function SectionSubtitle({
  title,
  className = "",
}: SectionSubtitleProps) {
  return (
    <p
      className={`uppercase tracking-widest mb-3 mt-3 scale-y-[2] text-black font-medium opacity-30 ${className}`}
    >
      {title}
    </p>
  );
}

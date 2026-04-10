type InfoItem = {
  label: string;
  value: string | string[];
};

type ProjectSkillsProps = {
  items: InfoItem[];
  labelColor?: string;
};

export default function ProjectSkills({
  items,
  labelColor = "text-green-950",
}: ProjectSkillsProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-[5vw] mt-[2vw] text-black items-start justify-start text-left">
      {items.map(({ label, value }) => (
        <div key={label} className="w-full md:w-[30vw]">
          <p
            className={`text-[6vw] ipadSM:text-[3vw] md:text-[2.5vw] lg:text-[2vw] opacity-70 uppercase tracking-widest scale-y-[1.5] ${labelColor}`}
          >
            {label}
          </p>
          <p className="font-medium non-wrap ipadSM:text-[3vw] text-[6.5vw] md:text-[2vw] lg:text-[1.5vw]">
            {Array.isArray(value) ? value.join(", ") : value}
          </p>
        </div>
      ))}
    </div>
  );
}

type ProjectSkillsProps = {
  role: string;
  organization: string;
  softwares?: string[];
};

export default function ProjectSkills({
  role,
  organization,
  softwares = [],
}: ProjectSkillsProps) {
  const items = [
    { label: "Role", value: role },
    { label: "Organization", value: organization },
    { label: "Softwares", value: softwares.join(", ") },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-5 text-black items-start justify-start text-left mt-5 mb-5">
      {items.map(({ label, value }) => (
        <div key={label} className="w-full flex flex-col ">
          <p className="font-sans text-sm ipad:text-lg 2xl:text-[1.3vw] text-black font-bold uppercase tracking-widest text-left opacity-30">
            {label}
          </p>
          <p className="font-medium font-sans text-xs xs:text-base 2xl:text-[1.2vw] 2xl:leading-8">
            {value}
          </p>
        </div>
      ))}
    </div>
  );
}

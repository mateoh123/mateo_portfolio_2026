type NameHeadingProps = {
  names: string[];
};

export default function NameHeading({ names }: NameHeadingProps) {
  return (
    <div className="flex -translate-y-[15vw] -translate-x-[12vw] desktopSM:translate-x-0 desktopSM:translate-y-0 flex-col gap-[14vw] desktopSM:gap-[8vw] lg:gap-[7vw] 2xl:gap-[9vw] ">
      {names.map((name) => (
        <h1
          key={name}
          className="ml-[0.5vw] text-[10vw] desktopSM:text-[5vw] font-archivo font-bold text-black text-left origin-top scale-y-[3] leading-[0.8] "
        >
          {name}
        </h1>
      ))}
    </div>
  );
}

type WorkDescriptionProps = {
  description: string;
};

export default function WorkDescription({ description }: WorkDescriptionProps) {
  return (
    <div className="">
      <p className="text-black font-medium ipadSM:text-[3vw] md:text-[2vw] lg:text-[1.6vw]">
        <span className="scale-y-[2] inline-block font-bold">
          {description.split(" ")[0]}
        </span>{" "}
        {description.split(" ").slice(1).join(" ")}
      </p>
    </div>
  );
}

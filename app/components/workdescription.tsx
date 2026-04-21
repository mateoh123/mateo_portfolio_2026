type WorkDescriptionProps = {
  description: string;
};

export default function WorkDescription({ description }: WorkDescriptionProps) {
  return (
    <div>
      <p className="text-black text-sm xs:text-base ipad:text-lg 2xl:text-[1.5vw] font-sans ">
        <span className="scale-y-[2] inline-block font-bold">
          {description.split(" ")[0]}
        </span>{" "}
        {description.split(" ").slice(1).join(" ")}
      </p>
    </div>
  );
}

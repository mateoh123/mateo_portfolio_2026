type WorkDescriptionProps = {
  description: string;
};

export default function WorkDescription({ description }: WorkDescriptionProps) {
  return (
    <div>
      <p className="text-black mb-3 text-xs xs:text-sm 2xl:text-[1vw] 2xl:leading-8 font-sans leading-6">
        <span className="scale-y-[2] inline-block font-bold">
          {description.split(" ")[0]}
        </span>{" "}
        {description.split(" ").slice(1).join(" ")}
      </p>
    </div>
  );
}

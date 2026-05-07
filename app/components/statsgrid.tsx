import Image from "next/image";

type StatSection = {
  title: string;
  bullets: string[];
  image?: string;
  imageAlt?: string;
};

type StatsGridProps = {
  sections: StatSection[];
};

export default function StatsGrid({ sections }: StatsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 text-black">
      {sections.map(({ title, bullets, image, imageAlt }) => (
        <div key={title}>
          <p className="uppercase text-xs xs:text-sm 2xl:text-[1vw] 2xl:leading-8 tracking-widest opacity-70 mb-3 mt-3 scale-y-[2]">
            {title}
          </p>
          <ul className="list-disc pl-6 text-xs xs:text-base 2xl:text-[1.2vw] 2xl:leading-8">
            {bullets.map((bullet, index) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
          {image && (
            <div className="w-full sm:w-[calc(100%-8px)] border-2">
              <Image
                src={image}
                alt={imageAlt ?? ""}
                width={400}
                height={400}
                className="w-full h-auto"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

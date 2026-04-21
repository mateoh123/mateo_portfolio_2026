import Image from "next/image";

type VideoAndImageProps = {
  videoUrl: string;
  imageSrc: string;
  imageAlt: string;
};

export default function VideoAndImage({
  videoUrl,
  imageSrc,
  imageAlt,
}: VideoAndImageProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-4 items-start">
      <div className="w-full sm:w-[calc(50%-8px)] aspect-[9.6/16]">
        <iframe
          src={videoUrl}
          className="w-full h-full"
          allowTransparency={true}
          allow="encrypted-media"
        />
      </div>
      <div className="w-full sm:w-[calc(50%-8px)]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={400}
          height={400}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}

import Image from "next/image";

type VideoAndImageProps = {
  videoUrl: string;
  imageSrc: string;
  imageAlt: string;
  aspectRatio?: "portrait" | "landscape";
};

export default function YoutubeAndImage({
  videoUrl,
  imageSrc,
  imageAlt,
  aspectRatio = "portrait",
}: VideoAndImageProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-4 items-start">
      <div className="w-full sm:w-[calc(29%-8px)]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={400}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>
      <div
        className={`w-full sm:w-[calc(50%-8px)] ${aspectRatio === "portrait" ? "aspect-[9.6/16]" : "aspect-video"}`}
      >
        <iframe
          src={videoUrl}
          className="w-full h-full"
          allowTransparency={true}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}

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
    <div className="flex flex-col sm:flex-row gap-1 gap-y-4 mb-5 ">
      <div className="w-full sm:w-2/5">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={400}
          height={400}
          className="w-full h-full "
        />
      </div>
      <div
        className={`w-full sm:w-2/3 ${aspectRatio === "portrait" ? "aspect-[9.6/16]" : "aspect-video"}`}
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

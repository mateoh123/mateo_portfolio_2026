"use client";

import Image from "next/image";

type Props = {
  folders: Record<string, string[]>;
  folder: string;
};

export default function ModalImageGrid({ folders, folder }: Props) {
  const images = folders[folder] ?? [];

  return (
    <div className="flex flex-wrap justify-center ">
      {images.map((src, i) => (
        <div key={i} className="w-1/2 p-1 flex justify-center">
          <Image
            src={src}
            alt={`image ${i}`}
            width={800}
            height={800}
            className="w-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}

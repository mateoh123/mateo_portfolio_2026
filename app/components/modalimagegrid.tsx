"use client";

import Image from "next/image";

type Props = {
  folders: Record<string, string[]>;
  folder: string;
};

export default function ModalImageGrid({ folders, folder }: Props) {
  const images = folders[folder] ?? [];

  return (
    <div className="columns-1 xs:columns-2 md:columns-2 gap-2 mt-5 mb-5">
      {images.map((src, i) => (
        <div key={i} className="break-inside-avoid mb-2">
          <Image
            src={src}
            alt={`image ${i}`}
            width={800}
            height={800}
            className="w-full h-auto object-cover"
          />
        </div>
      ))}
    </div>
  );
}

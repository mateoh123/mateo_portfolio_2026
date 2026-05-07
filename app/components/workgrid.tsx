"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

type Project = {
  title: string;
  category: string[];
  image: string;
  link: string;
  hoverVideo?: string;
  hoverImage?: string;
};

type WorkGridProps = {
  projects: Project[];
};

function WorkGridItem({ project }: { project: Project }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={project.link}>
      <motion.div
        transition={{ duration: 0.2 }}
        className="group relative overflow-hidden bg-gray-100 aspect-video cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Static image — always present */}
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={`object-cover transition duration-500 ${
            isHovered && (project.hoverVideo || project.hoverImage)
              ? "opacity-0"
              : "opacity-100"
          }`}
        />

        {/* Hover video */}
        {isHovered && project.hoverVideo && (
          <video
            src={project.hoverVideo}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        {/* Hover image (fallback if no video) */}
        {isHovered && !project.hoverVideo && project.hoverImage && (
          <Image
            src={project.hoverImage}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition duration-500"
          />
        )}

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-300 border-1" />
        <div className="absolute top-0 left-0 p-6 text-white opacity-0 group-hover:opacity-100 transition duration-300 ">
          <p className="text-sm uppercase tracking-wide">
            {project.category.join(", ")}
          </p>
          <h3 className="text-xl mt-2 font-semibold leading-tight scale-y-[2]">
            {project.title}
          </h3>
        </div>
      </motion.div>
    </Link>
  );
}

export default function WorkGrid({ projects }: WorkGridProps) {
  return (
    <section className="w-full border-1">
      <div className="mx-auto">
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 overflow-y-auto">
          {projects.map((project, index) => (
            <WorkGridItem key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

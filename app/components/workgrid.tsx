"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type WorkGridProps = {
  projects: {
    title: string;
    category: string;
    image: string;
  }[];
};

const projects = [
  {
    title: "Virtual Reality Tour Training",
    category: "UX / VR",
    image: "/projects/vr-project.jpg",
  },
  {
    title: "Climate Storytelling Campaign",
    category: "Design / Sustainability",
    image: "/projects/climate-project.jpg",
  },
  {
    title: "Student Media Photography",
    category: "Photography",
    image: "/projects/photo-project.jpg",
  },
  {
    title: "Social Media Marketing Strategy",
    category: "Marketing",
    image: "/projects/marketing-project.jpg",
  },
  {
    title: "qw Media Photography",
    category: "Photography",
    image: "/projects/photo-project.jpg",
  },
  {
    title: "Sociaqwl Media Marketing Strategy",
    category: "Marketing",
    image: "/projects/marketing-project.jpg",
  },
];

export default function WorkGrid({ projects }: WorkGridProps) {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto">
        <div
          className="
    grid
    grid-cols-1
    xs:grid-cols-2
    md:grid-cols-2
    overflow-y-auto
  "
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="group relative overflow-hidden bg-gray-100 aspect-square cursor-pointer"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="
                  object-cover
                  transition
                  duration-500
                  group-hover:scale-105
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-black/0
                  group-hover:bg-black/40
                  transition
                  duration-300
                "
              />

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  p-6
                  text-white
                  opacity-0
                  group-hover:opacity-100
                  transition
                  duration-300
                "
              >
                <p className="text-sm uppercase tracking-wide">
                  {project.category}
                </p>
                <h3 className="text-xl font-semibold leading-tight">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

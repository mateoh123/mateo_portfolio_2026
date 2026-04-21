"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type WorkGridProps = {
  projects: {
    title: string;
    category: string;
    image: string;
    link: string;
  }[];
};

export default function WorkGrid({ projects }: WorkGridProps) {
  return (
    <section className="w-full  ">
      <div className=" mx-auto">
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 overflow-y-auto">
          {projects.map((project, index) => (
            <Link href={project.link} key={index}>
              <motion.div
                transition={{ duration: 0.2 }}
                className="group relative overflow-hidden bg-gray-100 aspect-video cursor-pointer"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition duration-500 "
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-300" />
                <div className="absolute top-0 left-0 p-6 text-white opacity-0 group-hover:opacity-100 transition duration-300">
                  <p className="text-sm uppercase tracking-wide">
                    {project.category}
                  </p>
                  <h3 className="text-xl font-semibold leading-tight">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

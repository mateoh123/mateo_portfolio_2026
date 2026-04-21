"use client";

import Image from "next/image";
import Link from "next/link";

export default function ContactPatch() {
  return (
    <Link
      href="/contact"
      className="absolute top-1/2 -translate-x-[210%] translate-y-[25%] w-[20vw] z-[15] group"
      style={{ cursor: "pointer" }}
    >
      <Image
        src="/assets/contactpatchStatic.png"
        alt="hand sleeve"
        width={1000}
        height={1000}
        className="w-full h-auto animate-pulse-glow transition ease-in-out opacity-100 group-hover:opacity-0 pointer-events-none"
        priority
      />
      <Image
        src="/assets/contactpatchActive.png"
        alt="hand sleeve"
        width={1000}
        height={1000}
        className="absolute inset-0 w-full h-auto transition ease-in-out opacity-0 group-hover:opacity-100 pointer-events-none"
        priority
      />
    </Link>
  );
}

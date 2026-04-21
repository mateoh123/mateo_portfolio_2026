"use client";
import Link from "next/link";

export default function ContactButton() {
  return (
    <Link
      href="/contact"
      className="fixed left-0 top-2/12 z-20 bg-red-600 text-white text-sm font-medium tracking-widest uppercase py-2"
      style={{
        writingMode: "vertical-rl",
        transform: "translateY(180%) rotate(360deg)",
      }}
    >
      <h1 className="scale-x-[3] font-[Impact]">Contact</h1>
    </Link>
  );
}

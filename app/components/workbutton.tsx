"use client";
import Link from "next/link";

export default function WorkButton() {
  return (
    <Link
      href="/"
      className="fixed  left-0 top-2/12 z-20 bg-white text-black text-sm font-medium tracking-widest uppercase py-3 p-1"
      style={{
        writingMode: "vertical-rl",
        transform: "translateY(180%) rotate(360deg)",
      }}
    >
      <h1 className="scale-x-[3] font-[Impact]">Home</h1>
    </Link>
  );
}

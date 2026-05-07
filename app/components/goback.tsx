import Link from "next/link";
import Image from "next/image";

export default function GoBack() {
  return (
    <Link href="/">
      <Image
        src="/assets/WorkBackHand.png"
        alt="go back"
        width={100}
        height={100}
        className="fixed rotate-180 overflow-hidden animate-sway -top-4 w-[20vw]  md:-top-7 left-4 z-50 w-[8vw] md:w-[10vw] h-auto cursor-pointer transition-transform duration-200 hover:scale-110"
      />
    </Link>
  );
}

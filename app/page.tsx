import Image from "next/image";
import Link from "next/link";
import wavingHand from "../public/assets/Front_Page_Assets/waving_hand.gif";

export default function Home() {
  return (
    <main className="min-h-screen grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 bg-white">
      <div className="hidden md:block"></div>
      <div>
        <div className="flex flex-col gap-[45vw] mobile:gap-[15vw] ipad:gap-[15vw] md:gap-[5vw]">
          <div className="flex flex-col justify-start items-start">
            <div className="flex flex-row items-center gap-4">
              <h1 className="origin-top mobile:origin-center text-[19vw] ipad:text-[15vw] md:text-[6vw]  font-archivo text-black font-bold text-left scale-y-[3] leading-[0.8] ">
                Mateo
              </h1>
              <div className="hidden mobile:mt-1 text-[10vw] ipad:text-[7vw] mobile:flex md:text-[3vw] flex-col gap-2 md:gap-0.5 mt-2 text-left text-stone-600">
                <Link href="/work">
                  <p className="cursor-pointer text-red-600 mt-4 relative font-archivo font-semibold scale-y-[2] cursor-pointer pl-0 hover:pl-6 transition-all duration-200 before:absolute before:left-0 before:opacity-0 hover:before:opacity-100 before:content-['>']">
                    Work
                  </p>
                </Link>
                <Link href="/contact">
                  <p className="cursor-pointer text-red-600 mt-4 relative font-archivo font-semibold scale-y-[2] cursor-pointer pl-0 hover:pl-6 transition-all duration-200 before:absolute before:left-0 before:opacity-0 hover:before:opacity-100 before:content-['>']">
                    Contact
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-[19vw] ipad:text-[15vw] md:text-[6vw] font-archivo text-black font-bold text-left scale-y-[3] leading-[0.8] mb-[8vw]">
              Hernandez
            </h1>
          </div>
        </div>
        <div className=" text-[8vw] ml-[2vw] mobile:hidden flex flex-col gap-1 mt-2 text-stone-600">
          <Link href="/work">
            <p className="cursor-pointer text-red-600 mt-4 relative font-archivo font-semibold scale-y-[2] cursor-pointer pl-0 hover:pl-6 transition-all duration-200 before:absolute before:left-0 before:opacity-0 hover:before:opacity-100 before:content-['>']">
              Work
            </p>
          </Link>
          <Link href="/contact">
            <p className="cursor-pointer text-red-600 mt-4 relative font-archivo font-semibold scale-y-[2] cursor-pointer pl-0 hover:pl-6 transition-all duration-200 before:absolute before:left-0 before:opacity-0 hover:before:opacity-100 before:content-['>']">
              Contact
            </p>
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 w-full flex justify-center">
          <Image
            src={wavingHand}
            alt="waving hand"
            className="w-[650px] md:w-[55vw] lg:w-[60vw] h-auto"
            priority
          />
        </div>
      </div>
      <div className="hidden md:block"></div>
    </main>
  );
}

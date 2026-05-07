import ContactForm from "../components/contactform";
import Image from "next/image";
import SocialLinks from "../components/sociallinks";
import WorkButton from "../components/workbutton";
import WorkPatch from "../components/workpatch";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen ipadLG:overflow-hidden grid-cols-[1fr] ipadLG:grid-cols-[1fr_0.8fr] gap-[1vw] ipadLG:gap-[0vw] grid  bg-white">
      <div className="hidden ipadLG:block">
        <div className="hidden overflow-hidden desktopSM:flex flex-row desktopSM:flex-col h-screen gap-6 ml-[1vw]">
          <h1 className=" mobile:origin-center text-[5vw] ipad:text-[3vw] ipad:mt-[3vw] md:text-[2.5vw] md:mt-[2vw] lg:text-[2vw] lg:mt-[2vw] font-archivo text-black font-bold text-left scale-y-[3] leading-[0.8]">
            Mateo Hernandez
          </h1>
          <SocialLinks
            instagram="https://www.instagram.com/_.tomateo._/"
            linkedin="https://www.linkedin.com/in/mateo-hernandez21/"
            email="mateoche76@gmail.com"
            size={25}
          />
        </div>
        <WorkPatch />
        <Image
          src="/assets/sidewayslegs.png"
          alt="hand sleeve"
          width={1000}
          height={1000}
          className="hidden ipadLG:block ipadLG:absolute top-1/2 -translate-x-[5%] -translate-y-[57%] w-[60vw] h-auto z-[5]"
          priority
        />
      </div>
      <div className="flex flex-col min-h-screen pl-3 pr-3 pt-5 pb-10 gap-[6vw] bg-black">
        <div className="block ipadLG:hidden">
          <WorkButton />
        </div>
        <div className="items-center justify-center ipadLG:justify-evenly">
          {/* <SocialLinks
            color="white"
            direction="row"
            instagram="https://www.instagram.com/_.tomateo._/"
            linkedin="https://www.linkedin.com/in/mateo-hernandez21/"
            email="mateoche76@gmail.com"
            size={25}
          /> */}
        </div>
        <ContactForm />
      </div>
    </main>
  );
}

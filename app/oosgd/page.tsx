{
  /* <main>
        <h1 className="origin-top mt-[2vw] mb-[14vw] ml-[0.5vw]  md:text-[5vw] font-archivo text-black font-bold text-left scale-y-[3] leading-[0.8]">
          Office of Sustainability
        </h1>
      </main>
      <main className="relative min-h-screen overflow-hidden grid grid-cols-1 md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_3fr] bg-white">
        <div className="hidden md:flex flex-col items-end text-right mt-[1vw]"></div>
        <div className="hidden md:flex md:flex-col md:gap-15 m-[3vw]">
          <p className="text-black font-medium">
            <span className="scale-y-[2] inline-block font-bold">As</span> a
            Communications Coordinator for the NYU Office of Sustainability, I
            managed and supported communication efforts that connected students,
            staff, and faculty to sustainability initiatives across campus. My
            role focused on maintaining a consistent digital presence, improving
            internal communication workflows, and designing visual assets that
            made sustainability messaging more accessible and engaging. This
            position strengthened my ability to coordinate messaging across
            teams, manage digital platforms, and translate complex environmental
            topics into clear, visually compelling communication.
          </p>
          <h1 className="origin-top mt-[2vw] mb-[14vw] ml-[0.5vw]  md:text-[5vw] font-archivo text-black font-bold text-left scale-y-[3] leading-[0.8]">
            Digital Graphics
          </h1>
          <ModalImageGrid folders={folders} folder="OfficeOfSustainability" />;
          <iframe
            src="https://www.instagram.com/reel/DR2KIKrkalE/embed"
            width="400"
            height="700"
            allowTransparency={true}
            allow="encrypted-media"
          />
          <iframe
            src="https://www.instagram.com/reel/DRfNu6HgXQ3/embed"
            width="400"
            height="700"
            allowTransparency={true}
            allow="encrypted-media"
          />
          <iframe
            src="https://www.instagram.com/reel/DQesQrzkYDu/embed"
            width="400"
            height="700"
            allowTransparency={true}
            allow="encrypted-media"
          />
          <iframe
            src="https://www.instagram.com/reel/DPg6MIKCprt/embed"
            width="400"
            height="700"
            allowTransparency={true}
            allow="encrypted-media"
          />
          <iframe
            src="https://www.instagram.com/reel/DN5qhoKgRru/embed"
            width="400"
            height="700"
            allowTransparency={true}
            allow="encrypted-media"
          />
        </div>
      </main>
       */
}
import fs from "fs";
import path from "path";
import OOSGD_Client from "./oosgdclient";

export default function Page() {
  const baseDir = path.join(process.cwd(), "public/assets/Work_Assets");
  const folders: Record<string, string[]> = {};

  fs.readdirSync(baseDir).forEach((folder) => {
    const folderPath = path.join(baseDir, folder);
    if (fs.statSync(folderPath).isDirectory()) {
      folders[folder] = fs
        .readdirSync(folderPath)
        .filter((f) => /\.(jpg|jpeg|png|avif|webp)$/i.test(f))
        .map((f) => `/assets/Work_Assets/${folder}/${f}`);
    }
  });

  return <OOSGD_Client folders={folders} />;
}
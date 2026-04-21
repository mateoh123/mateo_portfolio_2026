import fs from "fs";
import path from "path";
import AXE_Client from "./axeclient";

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

  return <AXE_Client folders={folders} />;
}

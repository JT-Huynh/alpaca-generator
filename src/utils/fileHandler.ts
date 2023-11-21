import { type Dirent } from "fs";
import { readdir } from "fs/promises";
import path from "path";

export async function getDirectioriesName() {
  const assestPath = path.join(process.cwd(), "./public/alpaca");

  const directories = (
    await readdir(assestPath, { withFileTypes: true })
  ).filter((dirent: Dirent) => dirent.isDirectory());

  const directoriesName = directories.map(
    (directory: Dirent) => directory.name,
  );

  return directoriesName;
}

import fs from "fs/promises";
import fsn from "fs";
import path from "path";

const basepath = "E:\\Web Development\\node.js\\Excercise\\15- Clear the Clutter";

const skipFiles = [
  "main.js",
  "package.json",
  "package-lock.json",
  "node_modules",
];

const files = await fs.readdir(basepath);

for (const item of files) {
  // Skip important files/folders
  if (skipFiles.includes(item)) {
    continue;
  }

  const fullPath = path.join(basepath, item);

  // Skip folders
  if (fsn.lstatSync(fullPath).isDirectory()) {
    continue;
  }

  // Get file extension
  const ext = path.extname(item).slice(1);

  // Skip files without extension
  if (!ext) {
    continue;
  }

  const folderPath = path.join(basepath, ext);

  // Create extension folder if it doesn't exist
  if (!fsn.existsSync(folderPath)) {
    await fs.mkdir(folderPath);
  }

  // Move file
  await fs.rename(fullPath, path.join(folderPath, item));

  console.log(`${item} → ${ext}/`);
}

console.log("✅ Files organized successfully!");
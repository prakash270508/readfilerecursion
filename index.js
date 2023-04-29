const fs = require("fs/promises");
const path = require("path");

async function readDirRecursive(rootPath) {
  const fileNames = [];

  async function traverseDir(dir) {
    const files = await fs.readdir(dir);

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const filePath = path.join(dir, file);
      const stat = await fs.lstat(filePath);

      if (stat.isDirectory()) {
        await traverseDir(filePath);
      } else {
        fileNames.push(filePath);
      }
    }
  }

  await traverseDir(rootPath);

  return fileNames;
}

module.exports = readDirRecursive

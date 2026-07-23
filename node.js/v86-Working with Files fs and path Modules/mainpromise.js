import fs from "fs/promises";

const data = await fs.readFile("shravan.txt", "utf8");

console.log(data);
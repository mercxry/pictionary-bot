import { readFileSync } from "fs";

const phrases: string = readFileSync("./src/phrases.json", "utf8");

export default JSON.parse(phrases);

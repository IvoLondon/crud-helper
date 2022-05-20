import { readFile, writeFile, appendFile } from "./helpers.js";

export const createItems = async (fileName, item) => {
  if (!fileName) throw "The file name is required";
  if (!item) throw "The item is required";
  await appendFile(fileName, `${item}\r\n`);
  return readItems("animals");
};

export const readItems = async (fileName) => {
  return await readFile(fileName);
};

export const updateItems = (fileName, targetItem, newItem) => {};

export const deleteItems = (fileName, targetItem) => {};

console.log(await createItems(process.argv[2], process.argv[3]));

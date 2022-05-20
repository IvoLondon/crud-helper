import fs from "fs/promises";

//read the file
export const readFile = async (fileName) => {
  if (!fileName) throw "The file name is required";
  return await fs.readFile(`./data/${fileName}.csv`, "utf8");
};

//update the file
export const writeFile = async (fileName, data) => {
  if (!fileName) throw "The file name is required";
  if (!data) throw "The data is required";
  return await fs.writeFile(`./data/${fileName}.csv`, data);
};

//append the file
export const appendFile = async (fileName, data) => {
  if (!fileName) throw "The file name is required";
  if (!data) throw "The data is required";
  return await fs.appendFile(`./data/${fileName}.csv`, data);
};

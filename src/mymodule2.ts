import fs from "fs";

export async function showJestCB(
  directory: string,
  extFile: string
): Promise<string[]> {
  // return new Promise(async (resolve) => {
  // (async () => {
  const response = await fs.promises.readdir(directory);
  const listData: string[] = response.filter((file) => file.includes(extFile));
  return listData;
  // resolve(listData);
  // })();
  // });
}

import fs6 from "fs";

module.exports = function showFile<T extends (...args: any[]) => void>(
  directory: string,
  extFile: string,
  callback: T
) {
  fs6.readdir(directory, (err: any | null, files: string[]) => {
    if (err) return callback(err);

    //Siempre devuelve una lista vacia mínimo
    if (files.length == 0) return callback(new Error("asdfas"));

    const listData: string[] = [];
    files.forEach((file) => {
      if (file.includes("." + extFile)) {
        listData.push(file);
      }
    });
    try {
      callback(null, listData);
    } catch (err) {
      return callback(err);
    }
  });
};

export function showDirCB<T extends (...args: any[]) => void>(
  directory: string,
  extFile: string,
  callback: T
) {
  fs6.readdir(directory, (err: any | null, files: string[]) => {
    if (err) return callback(err);
    if (files.length == 0) return callback(new Error("asdfas")); //Siempre devuelve una lista vacia mínimo

    const listData: string[] = [];
    files.forEach((file) => {
      if (file.includes(extFile)) {
        listData.push(file);
      }
    });
    try {
      callback(null, listData);
    } catch (err) {
      return callback(err);
    }
  });
}

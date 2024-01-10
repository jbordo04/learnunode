const fs6 = require("fs");

module.exports = function showFile<T extends (...args: any[]) => void>(
  directory: string,
  extFile: string,
  callback: T
) {
  fs6.readdir(directory, (err: string | null, files: string[] | null) => {
    if (err) return callback(err);
    if (!files) return callback(new Error("asdfas"), null);

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

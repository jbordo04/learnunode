import fs2 from "fs";

const pathFile2 = process.argv[2];

fs2.readFile(pathFile2, (err: any, data: Buffer) => {
  if (err) return console.log(err);
  const resp = data.toString().split("\n").length - 1;
  console.log(resp);
});

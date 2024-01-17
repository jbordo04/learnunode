import http8 from "http";
import fs8 from "fs";

const port8 = process.argv[2];
const pathFile8 = process.argv[3];

const server8 = http8.createServer((req: any, res: any) => {
  const stream = fs8.createReadStream(pathFile8);

  stream.pipe(res);
});
server8.listen(port8);

// console.log("hola");

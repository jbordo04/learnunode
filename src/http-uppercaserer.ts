const http9 = require("http");
const map = require("through2-map");

const port9 = process.argv[2];

const server9 = http9.createServer((req: any, res: any) => {
  // let stream9 = fs.createReadStream(req);
  req
    .pipe(
      map((chunk: any) => {
        // const chunky = chunk.map((letter: string) => );
        return chunk
          .toString()
          .split("")
          .map((letter: string) => letter.toUpperCase())
          .join("");
      })
    )
    .pipe(res);
});

server9.listen(port9);

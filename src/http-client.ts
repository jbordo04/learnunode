const http = require("http");

const url = process.argv[2];
interface HTTPs<T = Buffer> {
  on(event: "data", listener: (chunk: string) => void): this;
  on(event: "error", listener: () => void): this;
}
//Para evitar poner res: any
http.get(url, (res: HTTPs<string>) => {
  res.on("data", (chunk: string) => {
    console.log(chunk.toString());
  });
  res.on("error", console.error);
});
// http.listen(3000);

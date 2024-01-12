import http1 from "http";

const url = process.argv[2];

http1.get(url, (res: any) => {
  let i = 0;
  let data = "";
  res.on("data", (chunk: string) => {
    i += chunk.length;
    data += chunk.toString();
  });
  res.on("end", () => {
    console.log(i);
    console.log(data);
  });
});

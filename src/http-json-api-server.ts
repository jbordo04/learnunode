const url13 = require("url");
const http13 = require("http");
const port13 = process.argv[2];
type Time =
  | {
      hour: number;
      minute: number;
      second: number;
    }
  | { unixtime: number };

http13
  .createServer((req: any, res: any) => {
    const urlObject = url13.parse(req.url, true);

    //Obtenemos la query en forma de objeto y accedemos a su propiedad como tal
    const time = urlObject.query.iso;

    if (urlObject.pathname === "/api/parsetime") {
      const hor =
        Number(time.split("T")[1].split(":")[0]) + 1 == 24
          ? 0
          : Number(time.split("T")[1].split(":")[0]) + 1;
      const min = time.split("T")[1].split(":")[1];
      const sec = time.split("T")[1].split(":")[2].split(".")[0];

      const dataToShow: Time = {
        hour: hor,
        minute: Number(min),
        second: Number(sec),
      };
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(dataToShow));
    }
    if (urlObject.pathname === "/api/unixtime") {
      const milisec = new Date(time).getTime();
      const dataToShow: Time = {
        unixtime: milisec,
      };
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(dataToShow));
    }
  })
  .listen(port13);

"use strict";
const url13 = require("url");
const http13 = require("http");
const port13 = process.argv[2];
http13
    .createServer((req, res) => {
    const urlObject = url13.parse(req.url, true);
    const time = urlObject.query.iso;
    if (urlObject.pathname === "/api/parsetime") {
        const hor = Number(time.split("T")[1].split(":")[0]) + 1 == 24
            ? 0
            : Number(time.split("T")[1].split(":")[0]) + 1;
        const min = time.split("T")[1].split(":")[1];
        const sec = time.split("T")[1].split(":")[2].split(".")[0];
        const dataToShow = {
            hour: hor,
            minute: Number(min),
            second: Number(sec),
        };
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(dataToShow));
    }
    if (urlObject.pathname === "/api/unixtime") {
        const milisec = new Date(time).getTime();
        const dataToShow = {
            unixtime: milisec,
        };
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(dataToShow));
    }
})
    .listen(port13);
//# sourceMappingURL=http-json-api-server.js.map
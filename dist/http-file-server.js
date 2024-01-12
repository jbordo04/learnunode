"use strict";
const http8 = require("http");
const fs8 = require("fs");
const port8 = process.argv[2];
const pathFile8 = process.argv[3];
const server8 = http8.createServer((req, res) => {
    let stream = fs8.createReadStream(pathFile8);
    stream.pipe(res);
});
server8.listen(port8);
//# sourceMappingURL=http-file-server.js.map
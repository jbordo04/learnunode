"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const url = process.argv[2];
http.get(url, (res) => {
    res.on("data", (chunk) => {
        console.log(chunk.toString());
    });
    res.on("error", console.error);
});
//# sourceMappingURL=http-client.js.map
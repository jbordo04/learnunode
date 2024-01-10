"use strict";
const http1 = require("http");
const url = process.argv[2];
http1.get(url, (res) => {
    let i = 0;
    let data = "";
    res.on("data", (chunk) => {
        i += chunk.length;
        data += chunk.toString();
    });
    res.on("end", () => {
        console.log(i);
        console.log(data);
    });
});
//# sourceMappingURL=http-collect.js.map
"use strict";
const http9 = require("http");
const map = require("through2-map");
const port9 = process.argv[2];
const server9 = http9.createServer((req, res) => {
    req
        .pipe(map((chunk) => {
        return chunk
            .toString()
            .split("")
            .map((letter) => letter.toUpperCase())
            .join("");
    }))
        .pipe(res);
});
server9.listen(port9);
//# sourceMappingURL=http-uppercaserer.js.map
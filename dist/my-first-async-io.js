"use strict";
const fs2 = require("fs");
const pathFile2 = process.argv[2];
fs2.readFile(pathFile2, (err, data) => {
    if (err)
        return console.log(err);
    const resp = data.toString().split("\n").length - 1;
    console.log(resp);
});
//# sourceMappingURL=my-first-async-io.js.map
"use strict";
const fs = require("fs");
const pathFile = process.argv[2];
const data = fs.readFileSync(pathFile);
const count = data.toString().split("\n");
const countFinal = count.length - 1;
console.log(countFinal);
//# sourceMappingURL=my-first-io.js.map
const fs = require("fs");
const path = require("path");
const pathFile = process.argv[2];
// const pathFile = path.join(__dirname, "note.txt");

// let count = 0;

const data = fs.readFileSync(pathFile, "utf8");
console.log("asd", data);
const count = data.split("\n");
// const countFinal = count.length - 1;
console.log(count[0]);

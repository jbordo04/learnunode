import fs from "fs";
// const path from "path";
const pathFile = process.argv[2];
// const pathFile = path.join(__dirname, "note.txt");

// let count = 0;

const data = fs.readFileSync(pathFile);
// console.log("asd", data);
const count = data.toString().split("\n");
const countFinal = count.length - 1;
console.log(countFinal);

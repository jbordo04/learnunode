//Cuidado, llegará module.ts, corregir manualmente el file en dist!!
const showFile = require("./mymodule");

const data6 = process.argv[2];
const ext6 = process.argv[3];

showFile(data6, ext6, (err: string, data: string[]) => {
  if (err) return console.log(err);
  data.forEach((file) => console.log(file));
});

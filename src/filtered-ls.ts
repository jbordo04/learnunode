const f4 = require("fs");

const file4 = process.argv[2];
const exteFile = "." + process.argv[3];

f4.readdir(file4, (err: string, files: string[]) => {
  if (err) return console.log(err);

  files.forEach((file) => {
    if (file.includes(exteFile)) {
      console.log(file);
    }
  });
});

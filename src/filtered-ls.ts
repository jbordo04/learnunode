import f4 from "fs";

const file4 = process.argv[2];
const exteFile = "." + process.argv[3];

f4.readdir(file4, (err: any, files: string[]) => {
  if (err) return console.log(err);

  files.forEach((file) => {
    if (file.includes(exteFile)) {
      console.log(file);
    }
  });
});

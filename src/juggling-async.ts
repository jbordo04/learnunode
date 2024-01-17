import http2 = require("http");
const dataArray: string[] = [];

function httpArray(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    http2
      .get(url, async (res: any) => {
        let arrayChunk = "";
        res.on("data", (chunk: string) => {
          if (arrayChunk !== undefined) {
            arrayChunk += chunk.toString();
          }
        });
        res.on("end", () => {
          resolve(arrayChunk);
        });
      })
      .on("error", (error: any) => {
        reject(error);
      });
  });
}
async function httpAsync() {
  for (let i = 0; i < 3; i++) {
    const data = await httpArray(process.argv[2 + i]);
    dataArray.push(data);
  }
}

//Función anónima autoinvocada con el método (func hola())() == func hola(){} hola()
(async () => {
  await httpAsync();
  dataArray.forEach((data) => {
    console.log(data);
  });
})();

// httpAsync();

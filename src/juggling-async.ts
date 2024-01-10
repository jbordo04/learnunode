// const url1 = process.argv[2];
// const url2 = process.argv[3];
// const url3 = process.argv[4];

// http2.get(url1, async (res: any) => {
//   let dataServer1 = "";
//   res.on("data", (chunk: string) => {
//     dataServer1 += chunk.toString();
//   });
//   res.on("end", () => {
//     console.log(dataServer1);
//   });
// });

// http2.get(url2, async (res: any) => {
//   let dataServer2 = "";

//   res.on("data", (chunk: string) => {
//     dataServer2 += chunk.toString();
//   });
//   res.on("end", () => {
//     console.log(dataServer2);
//   });
// });

// http2.get(url3, async (res: any) => {
//   let dataServer3 = "";
//   res.on("data", (chunk: string) => {
//     dataServer3 += chunk.toString();
//   });
//   res.on("end", () => {
//     console.log(dataServer3);
//   });
// });

const http2 = require("http");
const dataArray: any[] = [];

function httpArray(url: string, index: number): Promise<string> {
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
    const data = await httpArray(process.argv[2 + i], i);
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

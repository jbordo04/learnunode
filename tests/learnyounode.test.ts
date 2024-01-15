import fs from "fs";
// import http from "http";
import https from "https";
import net from "net";
import path from "path";
import { sum } from "../src/baby-steps";
import { showJestCB } from "../src/mymodule2";
// import { server } from "../src/time-server";

describe("Testing todos los niveles de LearnYouNode", () => {
  test("Nivel 1: Imprimir el string", () => {
    //Espiar todos los console.log
    const spy = jest.spyOn(console, "log");

    // console.log("Hola Mundo");

    const data = "Hola Mundo";
    expect(data).toBe("Hola Mundo");

    //Anula la funcion spyOn para que no afecte a otros console.log
    spy.mockRestore();
    // expect(data).toMatch(/^Hola Mundo$/);
  });

  test("Nivel 2: Imprimir suma lista Array", () => {
    const data = [2, 4, 5, 8];

    const result = sum(...data);
    // const result = sum.apply(null,data);
    expect(result).toEqual(19);
  });

  test("Nivel 3: Imprimir num saltos de linea Sync", () => {
    const path = "./note.txt";
    const data = fs.readFileSync(path);
    const num = data.toString().split("\n").length - 1;
    expect(num).toEqual(6);
  });

  test("Nivel 4: Imprimir num saltos de linea Async", async () => {
    const path = "./note.txt";
    const response = await fs.promises.readFile(path);
    const num = response.toString().split("\n").length - 1;
    expect(num).toEqual(6);
  });

  test("Nivel 5: Imprimir los dir del padre según la extensión", async () => {
    expect.assertions(1);
    const pathDir = path.resolve(__dirname, "..");
    // const pathDir = path
    //   .join(__dirname)
    //   .split("\\")
    //   .filter((item) => item != "src")
    //   .join("\\");
    const exteFile = ".json";
    const response = await fs.promises.readdir(pathDir);
    const filtered = response.filter((file) => file.includes(exteFile));
    expect(filtered.length).toEqual(5);
  });

  test("Nivel 6: Import una función mediante CallBack", async () => {
    expect.assertions(1);
    const pathDir = path.resolve(__dirname, "..");
    const exteFile = "lint";

    const response = await showJestCB(pathDir, exteFile);

    expect(response.length).toBe(1);
  });

  test("Nivel 7: Imprimir un dato enviado al cliente", async () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    async function request(url: string) {
      return new Promise<Buffer>((resolve) => {
        // let data: string = "";
        https.get(url, (res) => {
          res.on("data", (chunk) => {
            // data += chunk;
            resolve(chunk);
          });
        });
      });
    }
    const data = await request(url);
    // expect.assertions(1);
    expect(typeof data).toBe("object");
    expect(data).toBeInstanceOf(Buffer);
  });

  test("Nivel 8: Imprimir los datos enviado al cliente", async () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    async function request(url: string) {
      return new Promise<string>((resolve) => {
        let dataProm: string = "";
        https.get(url, (res) => {
          res.on("data", (chunk) => (dataProm += chunk));
          res.on("end", () => resolve(dataProm));
        });
      });
    }
    const data = await request(url);
    expect.assertions(1);
    expect(typeof data).toBe("string");
  });

  test("Nivel 9: Imprimir los datos acumulados simultaneamente mediante iteracion de urls", async () => {
    expect.assertions(2);
    const url = [
      "https://jsonplaceholder.typicode.com/users",
      "https://jsonplaceholder.typicode.com/users",
      "https://jsonplaceholder.typicode.com/users",
    ];
    const data: string[] = [];
    async function request(url: string) {
      return new Promise<string>((resolve) => {
        let data: string = "";
        https.get(url, (res) => {
          res.on("data", (chunk) => (data += chunk));
          res.on("end", () => resolve(data));
        });
      });
    }
    for (let i = 0; i < url.length; i++) {
      data[i] = await request(url[i]);
    }
    // expect.assertions(1);

    expect(data.length).toBe(3);
    expect(typeof data).toBe("object");
  });

  // const randomNumberExpected = 0.123456789;

  // beforeEach(() => {
  //   // modificamos el comportamiento del método random para que retorne randomNumberExpected
  //   jest.spyOn(global.Math, "random").mockReturnValue(randomNumberExpected);
  // });

  // afterEach(() => {
  //   // eliminamos el comportamiento asignado anteriormente
  //   jest.spyOn(global.Math, "random").mockRestore();
  // });
  // const dataSend = "";
  let spyServer: jest.SpyInstance;
  let dataWriting: string;
  let server: net.Server;
  let formatDate: string;

  function setupServer() {
    formatDate = "2024-01-15 18:38";

    spyServer = jest.spyOn(net, "createServer").mockImplementation(() => {
      server = net.createServer((socket) => {
        socket.write(formatDate);
        dataWriting = formatDate;
        socket.end("\n");
      });
      return server;
    });
    return new Promise<void>((resolve) => {
      server.listen(5000, resolve);
    });
  }

  beforeEach(async () => {
    await setupServer();
  });

  afterEach(async () => {
    await new Promise<void>((resolve) => {
      server.close(() => {
        spyServer.mockRestore();
        resolve();
      });
    });
  });

  test("Nivel 10: time server", async () => {
    expect.assertions(1);
    // const spyServer = jest.spyOn(net, "createServer");
    // await new Promise((resolve) => setImmediate(resolve));
    await Promise.resolve();

    expect(spyServer).toHaveBeenCalledTimes(1);
  });

  test("Nivel 10.5: time server", async () => {
    expect.assertions(1);
    await Promise.resolve();

    expect(dataWriting).toBe(formatDate);
  });
});
// const onData = jest.fn((data) => {
//   const receiveData = data.toString();
//   const expectedData = formatDate;
//   expect(receiveData).toBe(expectedData);
// });
// const client = net.createConnection({ port: 5000 });
// client.on("data", onData);

// const spyClient = jest.spyOn(net, "createConnection");
// setTimeout(() => {
//   server.close();
//   expect(spyServer).toHaveBeenCalledTimes(1);
//   expect(dataWriting).toBe(formatDate);
//   done();
// }, 2000);

// client.end();
// expect(spyClient).toHaveBeenCalledTimes(1);

// test("Nivel 11: file Server", async () => {});

// const url = "https://jsonplaceholder.typicode.com/users";

// // (async () => {
// async function request(url: string) {
//   return new Promise<string>((resolve) => {
//     // let data: string = "";
//     https.get(url, (res) => {
//       // resolve(chunk);
//       res.on("data", (chunk) => resolve(chunk));
//       // res.on("data", (chunk) => (data += chunk));
//       // res.on("end", () => resolve(data));
//     });
//   });
// }
// const data = await request(url);
// console.log("asdf", data, typeof data);
// })();

// const callFunc = async () => {
//   const data = await request(url);
//   console.log("asdf", data, typeof data);
// };
// callFunc();

// (async () => {
//   const data = await request(url);
//   console.log("asdf", data, typeof data);
// })();

// request(url).then((data) => {
//   console.log("asdf", data, typeof data);
// });

//https://developero.io/blog/jest-mock-module-function-class-promises-axios-y-mas

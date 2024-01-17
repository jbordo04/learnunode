import fs from "fs";
import http from "http";
import https from "https";
import net from "net";
import path from "path";
import { sum } from "../src/baby-steps";
import { showJestCB } from "../src/mymodule2";

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

  test("Nivel 10: time server", async () => {
    expect.assertions(1);
    const formatDate = "2024-01-15 18:38";
    const spyServer = jest.spyOn(net, "createServer");

    const server = net.createServer((socket) => {
      socket.write(formatDate);
      socket.end("\n");
    });
    server.listen(4001);

    server.close();

    expect(spyServer).toHaveBeenCalled();
  });
});

test("Nivel 11: Pipe a file by stream", async () => {
  // expect.assertions(2);
  const mockFilePath = "../note.txt";
  const spyHTTP = jest.spyOn(http, "createServer");

  const server = http.createServer((req: any, res: any) => {
    const stream = fs.createReadStream(mockFilePath);
    stream.pipe(res);
  });
  server.listen(7000);

  server.close();

  expect(spyHTTP).toHaveBeenCalled();
});
test("Nivel 12: UpperCase Server", async () => {
  const spyServer = jest.spyOn(http, "createServer");
  const server = http.createServer((req: any, res: any) => {
    req.pipe(res);
  });
  expect(spyServer).toHaveBeenCalled();
});

test("Nivel 13: JSON API Server", async () => {
  const date = new Date();
  const spyHTTP = jest.spyOn(http, "createServer");
  const server = http.createServer((req: any, res: any) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(date));
  });
  server.listen(8008);

  server.close();
  expect(spyHTTP).toHaveBeenCalled();
  expect(server).toBeTruthy();
});

//https://developero.io/blog/jest-mock-module-function-class-promises-axios-y-mas

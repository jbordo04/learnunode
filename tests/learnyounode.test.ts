import fs from "fs";
import path from "path";
import { sum } from "../src/baby-steps";
import { showDirCB } from "../src/mymodule";

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
    // const text = `Hola que tal estas?
    // Espero que bien, porque
    // lo necesitas!!`;
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
    const pathDir = path.resolve(__dirname, "..");
    const exteFile = ".json";
    showDirCB(pathDir, exteFile, (err: string, data: string[]) => {
      // let dataReturn;
      // if (err) return false;
      // return data.length;
      expect(data.length).toEqual(5);
    });
  });
  test("Nivel 6: Import una función mediante CallBack", async () => {});
});

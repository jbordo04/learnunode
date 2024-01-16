function movingShift(texto: string, numero: number) {
  let codigo = "";
  const abcArray = "abcdefghijklmnopqrstuvwxyz".split(""); //n no existe
  const ABCArray = "ABCEDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const textoSplited = texto.split("");

  let numCodigo = numero;
  // console.log(abc.length, texto.split("")[12 + 17]);
  for (let i = 0; i < textoSplited.length; i++) {
    if (i == 0) {
      codigo += ABCArray[ABCArray.indexOf(textoSplited[i]) + 1];
      ++numCodigo;
      continue;
    }
    if (abcArray.includes(textoSplited[i])) {
      const letraIndex = abcArray.indexOf(textoSplited[i]);

      const valueUnder26 = letraIndex + numCodigo;
      const valueUpper26 = letraIndex + numCodigo - 26;
      const valuePosition =
        letraIndex + numCodigo > 25 ? valueUpper26 : valueUnder26;
      codigo += abcArray[valuePosition];
      if (numCodigo == 26) numCodigo = 1;
      else ++numCodigo;
      // }
    } else {
      codigo += textoSplited[i];
      ++numCodigo;
    }
  }
  return codigo;
}

const u = "I should have known that you would have a perfect answer for me!!!";
const codCedsar = movingShift(u, 1);
const codeArray: string[] = [];
let numO = 0;
let numF = 14;
for (let i = 0; i < codCedsar.length; i++) {
  codeArray.push(codCedsar.slice(numO, numF));
  numO += 14;
  numF += 14;
  i += 14;
}
console.log("sdf", codeArray);

const v = [
  "J vltasl rlhr ",
  "zdfog odxr ypw",
  " atasl rlhr p ",
  "gwkzzyq zntyhv",
  " lvz wp!!!",
];

//Utilizamos JSON.stringify para comprobar el contenido de la Array y que no de false
JSON.stringify(v) === JSON.stringify(codeArray)
  ? console.log("Correcto")
  : console.log("Incorrecto");

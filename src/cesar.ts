function movingShift(texto: string, numero: number) {
  let codigo = "";
  const abc = "abcdefghijklmnopqrstuvyxwz"; //n no existe
  const ABC = "ABCEDEFGHIJKLMNOPQRSTUVYWXZ";
  const abcSplited = abc.split("");
  const ABCSplited = ABC.split("");
  const textoSplited = texto.split("");

  let numCodigo = numero;
  // console.log(abc.length, texto.split("")[12 + 17]);
  for (let i = 0; i < textoSplited.length; i++) {
    // console.log(numCodigo);
    if (abc.includes(textoSplited[i])) {
      const letraIndex = abcSplited.findIndex(
        (letraS) => letraS === textoSplited[i]
      );

      const valueUnder26 = letraIndex + numCodigo;
      const valueUpper26 = letraIndex + numCodigo - 26;
      const valuePosition =
        letraIndex + numCodigo > 25 ? valueUpper26 : valueUnder26;
      codigo += abcSplited[valuePosition];
      if (numCodigo == 26) numCodigo = 1;
      else ++numCodigo;
      // }
    } else if (ABC.includes(textoSplited[i])) {
      const letraIndex = ABCSplited.findIndex(
        (letraS) => letraS === textoSplited[i]
      );

      const valueUnder26 = letraIndex + numCodigo;
      const valueUpper26 = letraIndex + numCodigo - 26;
      const valuePosition =
        letraIndex + numCodigo > 25 ? valueUpper26 : valueUnder26;
      codigo += ABCSplited[valuePosition];
      ++numCodigo;
      // }
    } else {
      codigo += textoSplited[i];
      ++numCodigo;
    }
  }
  return codigo;
}

function movingShift1(texto: string, numero: number) {
  let codigo = "";

  const abc = "abcdefghijklmnopqrstuvwxyz"; // Ahora incluye 'z'

  const ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Ahora incluye 'D'
  const abcSplited = abc.split("");
  const ABCSplited = ABC.split("");
  const textoSplited = texto.split("");
  let numCodigo = numero;
  console.log(abc.length, texto.split("")[12 + 17]);
  for (let i = 0; i < textoSplited.length; i++) {
    console.log(numCodigo);
    if (abc.includes(textoSplited[i])) {
      const letraIndex = abcSplited.findIndex(
        (letraS) => letraS === textoSplited[i]
      );
      const valueUnder26 = letraIndex + numCodigo;
      const valueUpper26 = letraIndex + numCodigo - 26;
      const valuePosition =
        letraIndex + numCodigo > 25 ? valueUpper26 : valueUnder26;
      codigo += abcSplited[valuePosition];
      if (numCodigo == 26) numCodigo = 1;
      else ++numCodigo;
    } else if (ABC.includes(textoSplited[i])) {
      const letraIndex = ABCSplited.findIndex(
        (letraS) => letraS === textoSplited[i]
      );
      const valueUnder26 = letraIndex + numCodigo;
      const valueUpper26 = letraIndex + numCodigo - 26;
      const valuePosition =
        letraIndex + numCodigo > 25 ? valueUpper26 : valueUnder26;
      codigo += ABCSplited[valuePosition];
      ++numCodigo;
    } else {
      codigo += textoSplited[i];
      ++numCodigo;
    }
  }
}
const u = "I should have known that you would have a perfect answer for me!!";

const codCedsar = movingShift(u, 1);
console.log("sdf", codCedsar);
const v = [
  "J vltasl rlhr ",
  "zdfog odxr ypw",
  " atasl rlhr p ",
  "gwkzzyq",
  " lvz wp!!!",
];

export function sum(...values: number[]) {
  if (values.length == 0) return 0;
  const totalSum = values.reduce(
    (valueACtual, nextValue) => valueACtual + nextValue
  );
  return totalSum;
}

const inputParse = (values: string[]) => {
  const number = values.map((item) => parseInt(item));

  return sum(...number);
};

const valuesInCLI = inputParse(process.argv.slice(2));
console.log(valuesInCLI);

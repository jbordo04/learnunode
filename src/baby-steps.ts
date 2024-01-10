function sum(...values: number[]) {
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

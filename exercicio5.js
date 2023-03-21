function inverterString(str) {
  let invertidaStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    invertidaStr += str[i];
  }
  return invertidaStr;
}

const myString = 'hello world';
const invertidaString = inverterString(myString);
console.log(invertidaString);

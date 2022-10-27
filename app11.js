// -Найти сумму его четных делителей

let addNumber = +prompt("Add number");
let countEvenNumber = 0;
let a = 0;
let sumA = 0;
for (i = 1; i <= addNumber; i++) {
  if (addNumber % i != 0) {
    continue;
  }
  if (i > addNumber) {
    break;
  }
  document.write(" Делители " + i + ";");
  let evenNumber = i % 2 === 0;
  if (evenNumber === true) {
    a = i;
    sumA = sumA + a;
  }
}
console.log("Cумма четных делителей: " + sumA);

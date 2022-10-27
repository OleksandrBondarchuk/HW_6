// -Определить количество его четных делителей
let addNumber = +prompt("Add number");
let countEvenNumber = 0;
for (i = 2; i <= addNumber; i++) {
  if (addNumber % i != 0) {
    continue;
  }
  if (i > addNumber) {
    break;
  }
  document.write(" " + i + " ");
  let evenNumber = i % 2 === 0;
  if (evenNumber === true) {
    countEvenNumber = countEvenNumber + 1;
  }
  console.log(evenNumber);
  document.write(" " + evenNumber + " ");
}
console.log("Количество четных делителей: " + countEvenNumber);

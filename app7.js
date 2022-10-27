// -Вывести сумму только четных чисел в диапазоне от 30 до 80
let sum = 0;

for(let i = 30; i <= 80; i++) {
 if (i % 2 != 0) {
   continue;
 }
 if (i === 79) {
   break;
    }
    sum=sum+i
 console.log(i);
}

console.log('Result:' + sum);


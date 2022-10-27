// -Вывести все числа в диапазоне от 100 до 200 кратные 3

for(let i = 100; i <= 200; i++) {
 if (i % 3 != 0) {
   continue;
 }
 if (i > 200) {
   break;
 }
document.write(' '+i);
}

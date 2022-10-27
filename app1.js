/*
#1
*/

// const numberFirst = parseInt(prompt("Please add First number", 0));
// const numberSecond = parseInt(prompt("Please add Second number", 0));
// if (numberFirst > numberSecond) {
//     console.log("First bigger than Second");
// } else if (numberFirst < numberSecond){
//     console.log("Second bigger First");
// }else {
//     console.log ("First and Second are equal")
// }

/*
#2
*/

// const km = parseFloat(prompt("Please add First distance in km"));
// const foot = parseFloat(prompt("Please add Second distance in foot"));
// const footValue = (foot * 0.305);
// const kmValue = (km * 1000.0);
// console.log(kmValue)
// console.log(footValue)

// if (kmValue > footValue) {
//     console.log("First distance bigger than Second");
// } else if (kmValue === footValue) {
//     console.log("First and Second are equal");
// } else
//     console.log("Second distance bigger than First");


/*
#3
*/
// let itemA = parseInt(prompt("Please add number A"));
// let itemB = parseInt(prompt("Please add number B"));
// console.log(itemA % itemB);

// resultA = itemA % itemB;
// if (resultA === 0) {
//     console.log("The number B is a divisor of A");
// } else { console.log("The number B isn`t a divisor of A") };
// resultB = itemB % itemA;
// if (resultB === 0) {
//     console.log("The number A is a divisor of B");
// } else { console.log("The number A isn`t divisor of B") };

/*
#4 Дано число. Определить, заканчивается оно четной цифрой или нечетной? Вывести последнюю цифру.
*/

// let number = parseInt(prompt('Please add number'))
// result = number % 2;
// if (result === 0) {
//     console.log("This number is 'Even'");
// } else { console.log("This number is 'Uneven'") }

// console.log(number % 10);

/*
#5 Дано двузначное число. Определить, какая из его цифр больше: первая или вторая?
*/

// let number = parseInt(prompt("Please add two-digit number"));
// firstNumber = parseInt(number / 10);
// secondNumber = number % 10;
// if (firstNumber > secondNumber) {
//     console.log ("First number bigger than second")
// } else if (firstNumber === secondNumber) {
//     console.log("This numbers are equal");
// } else console.log("Second number bigger than first")

// console.log(firstNumber);
// console.log(secondNumber);

/*
#6 Дано трехзначное число. 
a. Определить является ли четной сумма его цифр. 
b. Определить, кратна ли сумма его цифр пяти. 
c. Определить является ли произведение его цифр больше 100. 
*/

//a
// console.log ("Определить является ли четной сумма его цифр:")
// let number = parseInt(prompt("Please add three-digit number"));

// firstNumber = parseInt(number / 100);
// secondNumber = parseInt((number - (firstNumber * 100)) / 10);
// thirdNumber = number % 10;
// summThreeNumbers = (firstNumber + secondNumber + thirdNumber);
// even = summThreeNumbers % 2;
// console.log(even === 0 ? 'Answer: The number is "Even"' : 'Answer:The number is "Uneven"');
// console.log("Summ of three number: " + summThreeNumbers);

// console.log ("Digit check:")
// console.log("First Number:"+firstNumber);
// console.log("Second Number:"+secondNumber);
// console.log("Third Number:"+thirdNumber);

// //b
// console.log("Определить, кратна ли сумма его цифр пяти:");

// multiplicityOfFive = summThreeNumbers % 5;
// console.log(multiplicityOfFive === 0 ? 'Answer: multiple of five' : 'Answer: not multiple of five');

// console.log("Check number:" + multiplicityOfFive);

// //c
// console.log("Определить является ли произведение его цифр больше 100:");
// multiplicationThreeNumbers = (firstNumber * secondNumber * thirdNumber);
// if (multiplicationThreeNumbers > 100) {
//     console.log("Answer: Digits greater than 100")
// } else if (multiplicationThreeNumbers === 100) {
//     console.log("Answer: Digits equals 100");
// } else console.log("Answer: Digits less than 100");

// console.log("Check number:" + multiplicationThreeNumbers);


/*
#7 Дано трехзначное число. 
Верно ли, что все его цифры одинаковые? 
Есть ли среди его цифр одинаковые?
*/

// console.log("Верно ли, что все его цифры одинаковые?");
// let number = parseInt(prompt("Please add three-digit number"));
// firstNumber = parseInt(number / 100);
// secondNumber = parseInt((number - (firstNumber * 100)) / 10);
// thirdNumber = number % 10;

// console.log("Answer:" + (firstNumber === secondNumber && secondNumber === thirdNumber));

// console.log("Есть ли среди его цифр одинаковые?");

// console.log("Variant #1")
// console.log("Answer:" + (firstNumber === secondNumber || firstNumber === thirdNumber || secondNumber === thirdNumber));

// console.log("Variant #2")
// console.log("Answer:" + (firstNumber === secondNumber || firstNumber === thirdNumber || secondNumber === thirdNumber)? 'Yes, there are quals number': 'No, there aren`t quals number');

// console.log ("Digit check:")
// console.log("First Number:"+firstNumber);
// console.log("Second Number:"+secondNumber);
// console.log("Third Number:"+thirdNumber);

/*
#8 Определить, является ли заданное шестизначное число зеркальным? (123321, 147741)
*/
// //variant#1

// console.log("Определить, является ли заданное шестизначное число зеркальным?");
// let number = prompt("Please add six-digit number");
// console.log("added numbers:" + number);

// n1 = number - (number % 100000);
// firstNum = n1 / 100000;
// n2 = number - (number % 10000) - n1;
// secondNum = n2 / 10000;
// n3 = number - (number % 1000) - n1 - n2;
// thirdNum = n3 / 1000;
// n4 = number - (number % 100) - n1 - n2 - n3;
// fourthNum = n4 / 100;
// n5 = number - (number % 10) - n1 - n2 - n3 - n4;
// fifthNum = n5 / 10;
// n6 = number % 10;
// sixthNum = n6;

// console.log((firstNum === sixthNum || secondNum === fifthNum || thirdNum === fourthNum) ? 'Answer:YES': 'Answer:Not');

// console.log ("Digit check:")
// console.log("1:" + n1);
// console.log("First:" + firstNum);
// console.log("2:" + n2);
// console.log("Second:" + secondNum);
// console.log("3:" + n3);
// console.log("Third:" + thirdNum);
// console.log("4:" + n4);
// console.log("Fourth:" + fourthNum);
// console.log("5:" + n5);
// console.log("Fifth:" + fifthNum);
// console.log("6:" + n6);
// console.log("Sixth:" + sixthNum);


 //variant #2

// (number[0] === number[5] && number[1] === number[4] && number[2] === number[3]) ? console.log('YES') : console.log('NO');


/* Написать, циклы, которые смогут:

-Вывести на страницу в одну строку через запятую числа от 10 до 20
-Вывести квадраты чисел от 10 до 20
-Вывести таблицу умножения на 7
-Найти сумму всех целых чисел от 1 до 15
-Найти произведение всех целых чисел от 15 до 35
-Найти среднее арифметическое всех целых чисел от 1 до 500
-Вывести сумму только четных чисел в диапазоне от 30 до 80
-Вывести все числа в диапазоне от 100 до 200 кратные 3
-Дано натуральное число. Найти и вывести на страницу все его делители.
-Определить количество его четных делителей
-Найти сумму его четных делителей
-Напечатать полную таблицу умножения от 1 до 10
*/

  let a = 10;

  while(a <= 20) {
     document.write(a + ',');
     a++;
  }





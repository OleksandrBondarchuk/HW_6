// -Дано натуральное число. Найти и вывести на страницу все его делители.

let b = +prompt("Add number");

for (i = 2; i <= b; i++){
    if (b % i != 0) {
        continue;
    } if (i > b) {
        break;
    }
    document.write(' ' + i + ' ');
}


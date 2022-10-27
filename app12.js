/* Написать, циклы, которые смогут:
Напечатать полную таблицу умножения от 1 до 10
*/

for (let i = 1; i <= 10; i = i + 1) {
  for (j = 1; j <= 10; j = j + 1){
  number = i * j
  document.write(i + ' *  ' + j + ' = ' + number + '; ');  
  }
document.write('<br>')
}



//5.10.4
/*Перепишите задание 5.10.3.

Определите остаток от деления количества лет на 10. В зависимости от этого выведите в алерт «Антон: 21 год» или «Антон: 24 года», или «Антон: 25 лет» и т.д. То есть для всех чисел с остатком 1 должно быть «_год», для чисел с остатком 2, 3, 4 – «_года», а для всех остальных – «_лет».

Вы можете использовать для этого условные конструкции if-else или switch-case.

Входные данные: Игорь и 2000.

Выходные данные: Игорь: 23 года*/



//Решение:
//Запрашиваем имя пользователя
const nameInput = prompt("Введите имя пользователя");
//Запрашиваем год рождения пользователя
const yearInput = prompt("Введите год рождения");
//Преобразуем строку в число
const year = +yearInput;
// Вычисляем возраст пользователя
const age = 2024 - year;
const remains = age % 10;


/*if (remains === 1) {
  alert(`${nameInput}: ` + age + " год");
} else if (remains === 2 || remains === 3 || remains === 4) {
  alert(`${nameInput}: ` + age + " годa");
} else {
  alert(`${nameInput}: ` + age + " лет");
}*/


switch (remains) {
  case 1:
    alert(`${nameInput}: ` + age + " год");
    break;
  case 2:
    alert(`${nameInput}: ` + age + " года");
    break;
  case 3:
    alert(`${nameInput}: ` + age + " года");
    break;
  case 4:
    alert(`${nameInput}: ` + age + " года");
    break;
  default:
    alert(`${nameInput}: ` + age + " лет");
    break;
}

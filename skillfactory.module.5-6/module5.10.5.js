//5.10.5
/*

Напишите программу, которая будет сообщать пользователю, на какую сумму он может взять кредит. Сумма кредита зависит от возраста пользователя.

Например:

Если клиенту нет 18 лет, то кредит он не получит.
Если клиенту от 18 до 21, то он может получить максимум 50000.
Если клиенту от 22 до 35, то он сможет получить максимум 400000.
Если клиенту от 36 до 65, то ему одобрят максимум 1000000.
Клиент может получить только сумму, кратную 1000.

В программе должна присутствовать проверка на вводимое пользователем значение. Допускаются только значения типа number.

Для ввода значения пользователем используйте функцию prompt(). Для информационного сообщения используйте функцию alert().
Входные значения: 21 и 45434.

Выходные значения: Мы можем вам выдать 45000.

*/

/*
// Решение:
let ageInput = prompt("Введите свой возраст");
let age = +ageInput;
if (age < 18 || age > 65) {
  alert("К сожалению, Вы не можете получить кредит");
} else if (age >= 18 && age <= 21) {
  let cread = +prompt(
    "Мы можем Вам выдать максимум 50000.\n Введите сумму кратную 10000",
  );
  sumCread = cread % 10000;
  if (sumCread === 0 && cread <= 50000) {
    alert("Вам одобрен кредит на сумму" + cread);
  } else if(cread > 50000) {
   alert("Вы ввели значение более 50000. Мы можем выдать максимум 50000")  
   }
    else {
    alert("Вы ввели значение не кратное 10000. Мы можем выдать 45000");
  }
} else if (age >= 22 && age <= 35) {
  let cread = +prompt(
    "Мы можем Вам выдать максимум 400000.\n Введите сумму кратную 10000.",
  );
  sumCread = cread % 10000;
  if (sumCread === 0 && cread <= 400000) {
    alert("Вам одобрен кредит на сумму" + cread);
  } else if(cread > 400000 ) {
   alert("Вы ввели значение более 400000. Мы можем выдать максимум 400000")  
   } else {
    alert("Вы ввели значение не кратное 10000. Мы можем выдать 390000");
  }
} else if (age >= 36 && age <= 65) {
  let cread = +prompt(
    "Мы можем Вам выдать максимум 1000000.\n Введите сумму кратную 10000.",
  );
  sumCread = cread % 10000;
  if (sumCread === 0 && cread < 1000000) {
    alert("Вам одобрен кредит на сумму" + cread);
  } else if(cread > 1000000 ) {
   alert("Вы ввели значение более 1000000. Мы можем выдать максимум 1000000")  
   }
  else {
    alert("Вы ввели значение не кратное 10000. Мы можем выдать 990000");
  }
} else {
  alert("Видимо Вам кредит не нужен. Всего доброго!");
}
*/


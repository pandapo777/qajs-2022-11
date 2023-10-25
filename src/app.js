// /**
//  * Проверка имени пользователя
//  * @param {string} name
//  * @returns {boolean}
//  */

// export const nameIsValid = (name) =>
//   !!name && name.length >= 2 && !name.includes(" ");

// /**
//  * Удаление пробелов из строки
//  *
//  * @param {string} text
//  * @returns {string}
//  */

// export const fullTrim = (text) => (text || "").replace(/\s/g, "");

// /**
//  * Подсчёт суммы заказа
//  *
//  * @param {[{quantity: number, name?: string, price: number}]} items
//  * @param {number} discount
//  * @example getTotal([{ price: 10, quantity: 10 }]) // 100
//  * @example getTotal([{ price: 10, quantity: 1 }]) // 10
//  * @example getTotal([{ price: 10, quantity: 1 }, { price: 10, quantity: 9 }]) // 100
//  * @example getTotal([{ price: 10, quantity: 0 }], { price: 10, quantity: 9 }) // 90
//  * @example getTotal([{ price: 10, quantity: 10 }], 10) // 90
//  * @example getTotal([{ price: 10, quantity: 10 }], 100) // 0
//  */
// export const getTotal = (items = [], discount = 0) => {
//   if (typeof discount !== "number") {
//     throw new Error("Скидка должна быть числом");
//   }
//   if (discount < 0) {
//     throw new Error("Процент скидки не может быть отрицательным");
//   }
//   const total = items.reduce((acc, item) => {
//     return acc + item.price * item.quantity;
//   }, 0);
//   return total - (total * discount) / 100;
// };

// В файле src/app.js cоздать функцию getScore.
// Функция getScore принимает на вход объект. В котором ключ это ник, а значение это успеваемость.
// Функция getScore возвращает в ответ сумму всех баллов.
// Пример:
// const scores = {
// Anna: 10,
// Olga: 1,
// Ivan: 5,
// }
// getScore(scores); // 16
// Полезные ссылки:
// for ... in
// Конструкция "switch"

const scores1 = {
  Anna: 10,
  Olga: 1,
  Ivan: 5,
  Andrey: 18,
};

const getScore = () => {
  let arr1 = Object.values(scores1);
  let sum1 = arr1.reduce(function (x, y) {
    return x + y;
  }, 0);
  console.log("Sum is " + sum1);
};

getScore();

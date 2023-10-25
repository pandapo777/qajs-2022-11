// eslint-disable-next-line no-unused-vars
import { nameIsValid, fullTrim, getTotal } from "../src/app.js";

/**
 * Для проверки, что jest настроен правильно. Можно удалить
 */
// test("adds 1 + 2 to equal 3", () => {
//   expect(1 + 2).toBe(3);
// });

test.each`
  a                | expected
  ${"Alena"}       | ${true}
  ${"Alena Elena"} | ${false}
  ${"A"}           | ${false}
  ${2}             | ${false}
`("checking nameIsValid", ({ a, expected }) => {
  expect(nameIsValid(a)).toBe(expected);
});

test.each`
  a                | expected
  ${"Alena"}       | ${"Alena"}
  ${"Alena Elena"} | ${"AlenaElena"}
  ${" "}           | ${""}
  ${"2 2"}         | ${"22"}
  ${"2 "}          | ${"2"}
`("checking fullTrime", ({ a, expected }) => {
  expect(fullTrim(a)).toBe(expected);
});

test("checking getTotal, ошибка (Скидка должна быть числом)", () => {
  expect(() => {
    getTotal([], "number");
  }).toThrow("Скидка должна быть числом");
});

test("checking getTotal2, ошибка (Процент скидки не может быть отрицательным)", () => {
  expect(() => {
    getTotal([], -1);
  }).toThrow("Процент скидки не может быть отрицательным");
});

test.each([
  { parameters: [[{ price: 10, quantity: 10 }], 0], expected: 100 },
  { parameters: [[{ price: 10, quantity: 1 }, { price: 10, quantity: 9 }], 10], expected: 90 },
  { parameters: [[{ price: 10, quantity: 1 }, { price: 10, quantity: 9 }], 1], expected: 99},
])("Checking getTotal", ({ parameters, expected }) => {
expect(getTotal(...parameters)).toBe(expected)
})

// test.each([
//   { parameters: [[{ price: 10, quantity: 1 }, { price: 10, quantity: 9 }], -1], expected: new Error("Процент скидки не может быть отрицательным")},


// ])("Checking getTotal", ({ parameters, expected }) => {
// expect(getTotal(...parameters)).toThrow()
// })

// test.failing.each`
//   discount | price | quantity | expected
//   ${"0"}   | ${10} | ${10}    | ${"Скидка должна быть числом"}
//   ${-15}   | ${10} | ${10}    | ${"Процент скидки не может быть отрицательным"}
//   ${0}     | ${10} | ${10}    | ${100}
//   ${0}     | ${10} | ${1}     | ${10}
// `("Checking getTotal", ({ discount, price, quantity, expected }) => {
//   expect(getTotal(discount, price, quantity)).toBe(expected);
// });

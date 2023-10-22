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

// test.each
//   a    | op     | b    | expected
//   ${2} | ${'*'} | ${2} | ${4}
//   ${4} | ${'-'} | ${2} | ${2}
//   ${2} | ${'+'} | ${2} | ${4}
//   ${4} | ${'/'} | ${2} | ${2}
// ('$a $op $p = $expect', ({a, op, b, expected}) => {
//   expect(calculator(a, op, b)).toBe(expected);
// });

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

// test.each`
//   a    | op     | b    | expected
//   ${2} | ${'*'} | ${2} | ${4}
//   ${4} | ${'-'} | ${2} | ${2}
//   ${2} | ${'+'} | ${2} | ${4}
//   ${4} | ${'/'} | ${2} | ${2}
// `('$a $op $p = $expect', ({a, op, b, expected}) => {
//   expect(getTotal(a, op, b)).toBe(expected);
// });

test.failing.each`
  discount | price | quantity | expected
  ${"0"}   | ${10} | ${10}    | ${"Скидка должна быть числом"}
  ${-15}   | ${10} | ${10}    | ${"Процент скидки не может быть отрицательным"}
`("Checking getTotal", ({ discount, price, quantity, expected }) => {
  expect(getTotal(discount, price, quantity)).toBe(expected);
});

test.each`
  discount | price | quantity | expected
  ${0}     | ${10} | ${10}    | ${100}
  ${0}     | ${10} | ${1}     | ${10}
`("Checking getTotal", ({ discount, price, quantity, expected }) => {
  expect(getTotal(discount, price, quantity)).toBe(expected);
});

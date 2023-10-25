// // eslint-disable-next-line no-unused-vars
// import { nameIsValid, fullTrim, getTotal } from "../src/app.js";

// /**
//  * Для проверки, что jest настроен правильно. Можно удалить
//  */
// test("adds 1 + 2 to equal 3", () => {
//   expect(1 + 2).toBe(3);
// });

// Домашнее задание
// АПИ тесты

// Описание/Пошаговая инструкция выполнения домашнего задания:
// В папке specs создайте файл api.spec.js
// В этом задании есть два варианта, выберете, тот, что вам больше подходит:
// Вариант 1:
// Напишите 5 апи-тестов на сервис bookstore
// https://bookstore.demoqa.com/swagger/
// Напишите АПИ-тесты:

// Создание пользователя c ошибкой, логин уже используется
// Создание пользователя c ошибкой, пароль не подходит
// Создание пользователя успешно
// Генерация токена c ошибкой
// Генерация токена успешно

async function createUser(userName, password) {
  const response = await fetch("https://bookstore.demoqa.com/Account/v1/User", {
    method: "post",
    body: JSON.stringify({
      "userName": userName,
      "password": password,
    }),
    headers: { "Content-Type": "application/json" },
  });
  return response;
}

describe("5 api tests on bookstore", () => {
  test("Создание пользователя с ошибкой, логин уже используется", async () => {
    const response = await createUser("PandaAlena", "Alena2092!");
    const data = await response.json();
    expect(response.status).toBe(406);
    expect(data.code).toBe("1204");
    expect(data.message).toBe("User exists!");
  });

  test("Создание пользователя с ошибкой, пароль не подходит", async () => {
    const response = await createUser("PandaAlena", "Alena2092");
    const data = await response.json();
    expect(response.status).toBe(400);
    expect(data.code).toBe("1300");
    expect(data.message).toBe("Passwords must have at least one non alphanumeric character, one digit ('0'-'9'), one uppercase ('A'-'Z'), one lowercase ('a'-'z'), one special character and Password must be eight characters or longer.");
  });

  test("Создание пользователя успешно", async () => {
    const response = await createUser("PandaAlena222", "Alena2092!!");
    const data = await response.json();
    // expect(response.status).toBe(201);
    expect(data.username).toBe("PandaAlena222");
  });
});

async function GenerateToken(userName, password) {
  const response = await fetch(
    "https://bookstore.demoqa.com/Account/v1/GenerateToken",
    {
      method: "post",
      body: JSON.stringify({
        "userName": userName,
        "password": password,
      }),
      headers: { "Content-Type": "application/json" },
    },
  );
  return response;
}
describe("Cheking GenerateToken", () => {
  test("Генерация токена успешно", async () => {
    const response = await GenerateToken("PandaAlena11", "Alena2092!!");
    const data = await response.json();
    expect(response.status).toBe(200);
    expect(data.status).toBe("Success");
    expect(data.result).toBe("User authorized successfully.");
  });

  test("Генерация токена c ошибкой", async () => {
    const response = await GenerateToken("PandaAlena11", "Alena2092!");
    const data = await response.json();
    expect(response.status).toBe(200);
    expect(data.token).toBe(null);
    expect(data.status).toBe("Failed");
    expect(data.result).toBe("User authorization failed.");
});
});

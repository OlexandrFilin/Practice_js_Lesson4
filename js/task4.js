// ЗАДАЧА 4
// ПОТРІБНО СТВОРИТИ Ф-ЦІЮ , ЯКА БУДЕ ШУКАТИ НАРЦИСА.ГОЛОВНА УМОВА НАРЦИСА ЗНАЮТЬ УСІ , НАРЦИС НЕ ЗНАЄ НІКОГО
// // є елемент масиву , який незнає нікого
// // якщо не одна така людина , то вертаємо not found
// // якщо один , то перевірити , чи його знають усі люди, якщо так то вертаємо found

const people1 = [
  {
    name: "Alex",
    know: ["Eva", "Jhon"],
  },
  {
    name: "Ivan",
    know: ["Jhon", "Alex"],
  },
  {
    name: "Eva",
    know: ["Alex", "Jhon"],
  },
  {
    name: "Jhon",
    know: [],
  },
];

const people2 = [
  {
    name: "Alex",
    know: ["Eva", "Jhon"],
  },
  {
    name: "Jhon",
    know: ["Eva"],
  },
  {
    name: "Eva",
    know: [],
  },
  {
    name: "Ivan",
    know: ["Jhon", "Alex"],
  },
];

const people3 = [
  {
    name: "Alex",
    know: ["Eva", "Jhon"],
  },
  {
    name: "Jhon",
    know: [],
  },
  {
    name: "Eva",
    know: ["Alex", "Jhon"],
  },
  {
    name: "Ivan",
    know: ["Jhon", "Alex"],
  },
];
const people4 = [
  {
    name: "Alex",
    know: ["Eva", "Jhon"],
  },
  {
    name: "Jhon",
    know: [],
  },
  {
    name: "Eva",
    know: ["Alex", "Jhon"],
  },
  {
    name: "Jhek",
    know: [],
  },
  {
    name: "Ivan",
    know: ["Jhon", "Alex"],
  },
];
//повертаэмо масив з елементами вихідного масиву, де в елементі know порожній масив
function notKnowOnion(arr) {
  const arrResult = [];
  return arr.reduce((previousValue, currentValue) => {
    if (currentValue.know.length === 0) {
      previousValue.push(currentValue);
    }
    return previousValue;
  }, arrResult);
}
//В змінній result - ймовірні нарсиси
//якщо елементів більше 1 повертаємо "not found"
//перебираємо всі елементи пропускаючі ймовірного нарсиса
function findNarcissus(arr) {
  const result = notKnowOnion(arr);
  console.log("нікого не знає", result);
  if (result.length > 1) {
    return "not found";
  } else if (result.length === 0) {
    return;
  }
  for (let elem of arr) {
    if (elem.name === result[0].name) {
      continue;
    }
    if (!elem.know.includes(result[0].name)) {
      console.log("не знає ймовірного нарсиса " + result[0].name, elem);
      return;
    }
  }
  return "found  " + result[0].name;
}
console.log("people1 ", findNarcissus(people1));
console.log("people2 ", findNarcissus(people2));
console.log("people3 ", findNarcissus(people3));
console.log("people4 ", findNarcissus(people4));

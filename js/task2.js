// ЗАДАЧА 2
// 2.1НАПИШІТЬ КАЛЬКУЛЯТОР, ЯКИЙ БУДЕ РАХУВАТИ ЦІНУ ШАШЛИКА, В ЗАЛЕЖНОСТІ ВІД ЦІНИ ЗА КІЛОГРАМ І КІЛЬКОСТІ КУПЛЕНОГО ПРОДУКТА , І БУДЕ ВИВОДИТИ РЕЗУЛЬТАТ НА ЕКРАН
// html/
const randomRgbColor = () => {
  const r = Math.round(Math.random() * (255 - 1) + 1);
  const g = Math.round(Math.random() * (255 - 1) + 1);
  const b = Math.round(Math.random() * (255 - 1) + 1);
  return `rgb(${r},${g},${b})`;
};
const inpPrice = document.querySelector("#price");
const inpQuant = document.querySelector("#quantity");

const endPrice = document.querySelector(".text-right");
const formEl = document.querySelector("form");
const amountEl = document.querySelector(".amount");
const containerEl = document.querySelector(".container");

formEl.addEventListener("input", onEnter);
formEl.addEventListener("submit", onSend);
containerEl.style.backgroundColor = randomRgbColor();

function onSend(evt) {
  evt.preventDefault();
  amountEl.textContent = inpQuant.value;
  endPrice.textContent = inpPrice.value * inpQuant.value;
}
function onEnter() {
  amountEl.textContent = inpQuant.value;
  endPrice.textContent = "";
}

// 2.2 ПЕРЕПИШІТЬ КОД , ЩОБ ЗНАЧЕННЯ МИ ОТРИМУВАЛИ ПО КЛІЦІ НА КНОПКУ , ПРИ НАЖАТТІ ЯКОГО БУДЕ ВАМ РАХУВАТИ ТА ВИВОДИТИ РЕЗУЛЬТАТ НА ЕКРАН
// 2.3 НАПИШІТЬ  РАНДОМНИЙ КОЛІР ДЛЯ НАШОЇ ФОРМИ КОЛЬКУЛЯТОРА ЗА ДОПОМОГОЮ ІНЛАЙНОВОГО СТИЛЮ

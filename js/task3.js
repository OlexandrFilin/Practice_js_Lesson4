// ЗАДАЧА 3
// 3.1 Є МАСИВ, ПОТРІБНО СТВОРИТИ РОЗМІТКУ ІЗ ТИХ КАРТОК (ВИКОРИСТАЙТЕ ШАБЛОННИЙ РЯДОК)
//  <ul class="js-list"></ul>

const instruments = [
  {
    id: 1,
    img: "https://content.rozetka.com.ua/goods/images/big/13664457.jpg",
    name: "Молоток",
    price: 150,
  },
  {
    id: 2,
    img: "https://machtz.com.ua/files/resized/products/dsc_2898_new.800x550.jpg",
    name: "Перфоратор",
    price: 3000,
  },
  {
    id: 3,
    img: "https://content2.rozetka.com.ua/goods/images/big_tile/232653359.jpg",
    name: "Рівень",
    price: 2000,
  },
];

// const  btnBayEl= document.querySelector(".btn");
const bayInstr = {
  instrumentsEl: document.querySelector(".js-goods"),
  inputInstrumentEl: document.querySelector(".select-instr"),
  inputQuntytiEl: document.querySelector(".quantyti-instr"),
 btnBayEl: document.querySelector(".btn"),
  resultBayEl: document.querySelector(".bayResult"),
};

function markup(arr) {
  return arr
    .map(
      ({ id, img, name, price }) =>
        `<li class = "js-instr-item" data-id='${id}'>
        <img src='${img}' alt='${name}' width=200 > <h2>${name}</h2> <p>${price}</p></li>`
    )
    .join("");
}
console.log(markup(instruments));
bayInstr.instrumentsEl.innerHTML = markup(instruments);
//Змінна для збереження вибрабного товару.
let selectInstrument;
//прослуховувачі на кнопку покупик  та  та на картінку інструменту
bayInstr.instrumentsEl.addEventListener("click", onClickInstrument);
bayInstr.btnBayEl.addEventListener("click", onClickBtnBay);

function onClickInstrument(e) {
  selectInstrument = e.target.closest(".js-instr-item");
  bayInstr.inputInstrumentEl.value = selectInstrument.dataset.id;
}

function onClickBtnBay(e) {
  e.preventDefault();

  if (!Number(bayInstr.inputInstrumentEl.value)) {
    alert("select a product");
    return;
  }
 const imgElem = selectInstrument.firstElementChild;
  const pQuntElem = Number(selectInstrument.lastElementChild.textContent);
 const name = imgElem.getAttribute('alt');
console.log(bayInstr.inputQuntytiEl)
 const quntity = Number(bayInstr.inputQuntytiEl.value);

 bayInstr.resultBayEl.textContent = `Ви придбали інструмент ${name} в кількості ${quntity} на суму ${quntity*pQuntElem}`;
}

// 3.2 ДОБАВТЕ КНОПКУ, ЧЕРЕЗ ЯКУ МИ КУПЛЯТИМЕМО ТОВАР

import tipCalculater from "./modules/tipCalculater.js";
import totalFinal from "./modules/totalFinal.js";
import updateTip from "./modules/updateTip.js";
import updateTotal from "./modules/updateTotal.js";

// Constantes de los elementos de HTML
const main = document.getElementById("main");
const form = document.getElementById("main-form");

const tipResult = document.getElementById("result-tip");
const totalResult = document.getElementById("result-total");

// Custom box
const customTip = document.getElementById("custom-tip");

// Guardar los valores en variables
const subtotal = document.getElementById("total-bill");
const porcenDiv = document.getElementById("form-btns");
const personas = document.getElementById("total-people");

// Metodo para seleccionar todos los botones
const btns = document.querySelectorAll(".form__box__container__btn");
const resetBtn = document.getElementById("reset-btn");

// Elemento para almacebar texto del invalid (para validar)
const invalid1 = document.getElementById("not-valid1");
const invalid2 = document.getElementById("not-valid2");
const invalid3 = document.getElementById("not-valid3");

// Variable para almacenar el valor porcentual seleccionado
let porcenTip;
let checkCustom;
let checkBtn = false;

// Evento para escuchar a que boton le estamos dando click
porcenDiv.addEventListener('click', (e) => {
  for (let i = 0; i < btns.length; i++) {
    btns[i].classList.remove("active");
  }

  if (e.target.classList.contains("form__box__container__btn")) {
    checkBtn = true;
  }

  porcenTip = e.target;
  porcenTip.classList.add('active');

  // Condicion para escuchar el custom
  if (e.target === customTip) {
    porcenTip = e.target;

    checkCustom = true;

    porcenTip.classList.remove('active');
  }
});

// Crear un evento de submit para la forma
form.addEventListener('submit', (e) => {
  // Enviar la action por defecto
  e.preventDefault();

  if (validateClick(checkBtn)) {
    //Si le dieron click a custom, entonces dividamos su valor entre 10
    if (checkCustom) {
      porcenTip.value = porcenTip.value / 100;
    }

    // Crear objeto constante con los valores de la forma
    const formulario = {
      subTotalF: subtotal.value,
      porcenTipF: porcenTip.value,
      personasF: personas.value,
    }

    const { subTotalF, porcenTipF, personasF } = formulario;

    if (validateAll(subTotalF, personasF)) {
      updateDOM(subTotalF, porcenTipF, personasF);
      subtotal.parentElement.classList.add("valid");
      personas.parentElement.classList.add("valid");

      removeBorder(subtotal, "valid");
      removeBorder(personas, "valid");
    }
  }
});

// Funcion para actualizar el DOM

function updateDOM(subTotalF, porcenTipF, personasF) {
  const tipFinal = tipCalculater(subTotalF, porcenTipF, personasF);
  
  const totalF = totalFinal(subTotalF, personasF, tipFinal);

  //Llamar  a las funciones que actualizan el DOM
  updateTip(tipFinal.toFixed(2), tipResult);
  updateTotal(totalF.toFixed(2), totalResult);
}

function removeText(element) {
  setTimeout(() => {
    element.innerText = "";
  }, 4000);
}

function removeBorder(element, classOfElement) {
  setTimeout(() => {
    element.parentElement.classList.remove(classOfElement);
  }, 4000);
}

// Boton para reiniciar la Tip calculator
resetBtn.addEventListener("click", (e) => {
  subtotal.value = "";
  customTip.value = "";
  personas.value = "";

  // Quitar validos
  subtotal.parentElement.classList.remove("valid");
  personas.parentElement.classList.remove("valid");

  // Quitar invalidos
  personas.parentElement.classList.remove("invalid");
  subtotal.parentElement.classList.remove("invalid");

  for (let i = 0; i < btns.length; i++) {
    btns[i].classList.remove("active");
  }

  tipResult.innerText = "$0.00";
  totalResult.innerText = "$0.00";
});

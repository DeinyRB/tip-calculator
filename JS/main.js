import tipCalculater from "./modules/tipCalculater.js";
import totalFinal from "./modules/totalFinal.js";

// Constantes de los elementos de HTML
const main = document.getElementById("main");
const form = document.getElementById("main-form");

// Guardar los valores en variables
const subtotal = document.getElementById("total-bill");
const porcenDiv = document.getElementById("form-btns");
const personas = document.getElementById("total-people");

// Variable para almacenar el valor porcentual seleccionado
let porcenTip;

// Evento para escuchar a que boton le estamos dando click
porcenDiv.addEventListener("click", (e) => {
  porcenTip = e.target;

  // Condicion para escuchar el custom
  if (e.target.id === "custom-tip") {
    console.log("Si soy custom");
  }
});

// Crear un evento de submit para la forma
form.addEventListener("submit", (e) => {
  // Enviar la action por defecto
  e.preventDefault();

  // Crear objeto constante con los valores de la forma
  const formulario = {
    subtotalF: subtotal.value,
    porcenTipF: porcenTip.value,
    personasF: personas.value,
  };

  console.log(formulario);

  const { subtotalF, porcenTipF, personasF } = formulario;

  const tipFinal = tipCalculater(subtotalF, porcenTipF, personasF);

  console.log(tipFinal.toFixed(2));

  const totalF = totalFinal(subtotalF, personasF, tipFinal);

  console.log(totalF.toFixed(2));
});

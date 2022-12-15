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

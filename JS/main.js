import tipCalculater from "./modules/tipCalculater";
import totalFinal from "./modules/totalFinal";

// Constantes de los elementos de HTML
const main = document.getElementById('main');
const form = document.getElementById('main-form');

// Guardar los valores en variables 
const subtotal = document.getElementById('total-bill');
const porcenDiv = document.getElementById('form-btns');
const personas = document.getElementById('total-people');

// Variable para almacenar el valor porcentual seleccionado
let porcenTip;

// Evento para escuchar a que boton le estamos dando click
porcenDiv.addEventListener('click', (e) =>{
  porcenTip = e.target;
  console.log(porcenTip);

  // Condicion para escuchar el custom
  if (e.target.id === 'custom-tip'){
    console.log('Si soy custom');
  }
});

// Crear un evento de submit para la forma
form.addEventListener('submit', (e) => {
  // Enviar la action por defecto
  e.preventDefault();

  // Crear objeto constante con los valores de la forma
  const formulario = {
    subtotalF: subtotal.value,
    porcenTipF: porcenTip.value,
    personasF: personas.value,
  }

console.log(formulario);

const {subtotalF, porcenTipF, personasF} = formulario;

const tipFinal = tipCalculator(subtotalF, porcenTipF, personasF);

console.log(tipFinal);

const totalF = totalFinal(subtotalF, porcenTipF, personasF);

console.log(totalF);

});


function tipCalculater(subtotal, porcenTip, personas) {
  let propina;

  propina = (subtotal * porcenTip) / personas;

  //Redondea sin decimales, es decir a numeros enteros
  //propina = Math.round(propina);

  return propina;
}

export default tipCalculater;

function totalFinal(subtotal, personas, propina){
  let totalF;

  totalF = subtotal / personas;

  totalF += propina;
  
  return totalF;
}


export default totalFinal;
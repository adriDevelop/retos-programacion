const esNumeroPrimo = (num:number):boolean => {

    if (num < 2) {
      return true;
    }
    for(let x = 2; x < num; x ++){
      if (num % x == 0){
        return false;
      }
    }
    return true;
}

for (let x:number = 1; x < 100; x++){
  if (esNumeroPrimo(x)){
    console.log(x);
  }
}
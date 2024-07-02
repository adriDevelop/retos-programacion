const decimalABinario = (decimal:number) =>{
  let numBinario: string = '';
  while(decimal > 0){
    numBinario = (decimal%2) + numBinario;
    decimal = Math.floor(decimal/2);
  }
  console.log(numBinario);
}

decimalABinario(5);
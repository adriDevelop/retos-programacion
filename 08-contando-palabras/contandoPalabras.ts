let arr = ['palabra1', 'palabra2', 'palabra3'];

const addFrase = (frase:string) => {
  if (frase != ''){
    let palabra = (frase.toLowerCase().split(' '));
    for(let word of palabra){
      arr.push(word);
    }
    console.log(arr);
  }
}

const contadorRepetidas = () => {
  let contadorPalabras = 0;
  for(let palabra in arr){
    for(let contador = 0; contador < arr.length; contador++){
      if (arr[palabra] === arr[contador]){
        contadorPalabras++;
      }
    }
    console.log(`La palabra ${arr[palabra]} se ha repetido un total de: ${contadorPalabras}`);
    contadorPalabras = 0;
  }
}

addFrase('HOla mi nombre es Adrian Adrian palabra1 palabra2 palabra1');
contadorRepetidas();
const muestraSucesion = () => {
  let arr:number[] = [];
  for (let n: number = 0; n < 50; n++){
    n <= 1 ? arr.push(n): arr.push(arr[n-2] + arr[n-1]); 
    console.log(arr[n] + ' ' + arr.length);
  }
}
console.log(muestraSucesion());
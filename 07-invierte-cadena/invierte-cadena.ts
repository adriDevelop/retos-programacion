let mensaje: string = 'Hola mundo';
let mensajeAlReves:string = "";

let arr:string[] = mensaje.split('');

for(let a = arr.length - 1; a >= 0; a--){ 
   mensajeAlReves += arr[a];
}

console.log(mensajeAlReves);
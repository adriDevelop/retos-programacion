"use strict";
let mensaje = 'Hola mundo';
let mensajeAlReves = "";
let arr = mensaje.split('');
for (let a = arr.length - 1; a >= 0; a--) {
    mensajeAlReves += arr[a];
}
console.log(mensajeAlReves);
//# sourceMappingURL=main.js.map
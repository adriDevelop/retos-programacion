"use strict";
const muestraSucesion = () => {
    let arr = [];
    for (let n = 0; n < 50; n++) {
        n <= 1 ? arr.push(n) : arr.push(arr[n - 2] + arr[n - 1]);
        console.log(arr[n] + ' ' + arr.length);
    }
};
console.log(muestraSucesion());
//# sourceMappingURL=main.js.map
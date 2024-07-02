"use strict";
const decimalABinario = (decimal) => {
    let numBinario = '';
    while (decimal > 0) {
        numBinario = (decimal % 2) + numBinario;
        decimal = Math.floor(decimal / 2);
    }
    console.log(numBinario);
};
decimalABinario(5);
//# sourceMappingURL=main.js.map
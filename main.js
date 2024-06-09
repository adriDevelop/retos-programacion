"use strict";
const anagrama = (palabra1, palabra2) => {
    const arr1 = palabra1.toLowerCase().split('');
    const arr2 = palabra2.toLowerCase().split('');
    if (arr1.sort().toString() === arr2.sort().toString()) {
        return true;
    }
    else {
        return false;
    }
};
console.log(anagrama('Adrian', 'Andrea'));
//# sourceMappingURL=main.js.map
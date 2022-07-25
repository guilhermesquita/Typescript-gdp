"use strict";
let b1 = document.getElementById('input1');
let b2 = document.getElementById('input2');
let btn = document.getElementById('button');
function Somar(n1, n2, devePrintar, Frase) {
    if (devePrintar) {
        console.log(n1 + n2);
    }
    return n1 + n2;
}
let devePrintar = true;
let Frase = 'O valor é: ';
btn.addEventListener('click', () => {
    console.log(Somar(Number(b1.value), Number(b2.value), devePrintar, Frase));
});

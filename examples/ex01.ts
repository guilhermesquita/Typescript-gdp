let b1 = document.getElementById('input1') as HTMLInputElement
let b2 = document.getElementById('input2') as HTMLInputElement
let btn = document.getElementById('button') as HTMLButtonElement

function Somar(n1: number, n2: number, devePrintar: boolean, Frase: string){
    if (devePrintar){
        console.log(n1 + n2)
    }
    return n1 + n2;
}

let devePrintar = true;
let Frase = 'O valor é: '

btn.addEventListener('click', ()=>{
    console.log(Somar(Number(b1.value), Number(b2.value), devePrintar, Frase))
})



let b1 = document.getElementById('input1') as HTMLInputElement
let b2 = document.getElementById('input2') as HTMLInputElement
let btn = document.getElementById('button') as HTMLButtonElement

function Somar(n1: number, n2: number){
    return n1 + n2;
}

btn.addEventListener('click', ()=>{
    console.log(Somar(Number(b1.value), Number(b2.value)))
})



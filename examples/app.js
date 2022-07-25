let b1 = document.getElementById('input1')
let b2 = document.getElementById('input2')
let btn = document.getElementById('button')

function Somar(n1, n2){
    if (typeof n1 === 'number' && typeof n2 === 'number'){
        return n1 + n2;
    }else{
        return Number(n1) + Number(n2)
    }
}

btn.addEventListener('click', ()=>{
    console.log(Somar(b1.value, b2.value))
})



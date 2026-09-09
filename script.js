function Somar(){
    
const campoA = document.getElementById("numero1").value;
const campoB = document.getElementById("numero2").value;

const numA = parseFloat(campoA);
const numB = parseFloat(campoB);

const total = numA + numB;

document.getElementById("resultado").innerText = `${total}`;
console.log(`Cálculo efetuado: ${numA} + ${numB} = ${total}`);

}

function Subtrair(){

    const campoA = document.getElementById("numero1").value;
    const campoB = document.getElementById("numero2").value;

    const numA = parseFloat(campoA);
    const numB = parseFloat(campoB);

    const total = numA - numB;

    document.getElementById("resultado").innerText = `${total}`;
    console.log(`Cálculo efetuado: ${numA} - ${numB} = ${total}`);
}

function Multiplicar(){

    const campoA = document.getElementById("numero1").value;
    const campoB = document.getElementById("numero2").value;

    const numA = parseFloat(campoA);
    const numB = parseFloat(campoB);

    const total = numA * numB;

    document.getElementById("resultado").innerText = `${total}`;
    console.log(`Cálculo efetuado: ${numA} x ${numB} = ${total}`);

}

function Dividir(){

    const campoA = document.getElementById("numero1").value;
    const campoB = document.getElementById("numero2").value;

    const numA = parseFloat(campoA);
    const numB = parseFloat(campoB);

    const total = numA / numB;

    document.getElementById("resultado").innerText = `${total}`;
    console.log(`Cálculo efetuado: ${numA} ÷ ${numB} = ${total}`);

}

function Limpar(){

    const campoA = document.getElementById("numero1").value = ("");
    const campoB = document.getElementById("numero2").value = ("");

     document.getElementById("resultado").innerText = "0";
    console.log(`console.log("Campos da calculadora reiniciados.")`);
}
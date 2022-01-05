//codigo del cuadrado
console.group("Cuadrados")
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCruadrado(lado) {
    return lado * 4;
}
// console.log("El perimetro del cuadrado es: " + perimetroCruadrado + "cm");

function areaCuadrado(lado) {
    return lado * lado;
}
// console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

//codigo del triangulo
console.group("Triangulos")

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

console.groupEnd();

//Circulo
console.group("Circulos");


// Diametro del circulo
function diametroCirculo(radio){
    return radio * 2;
}

// PI
const PI = Math.PI;

// Circunferencia del circulo
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}


// Area
function areaCirculo(radio) {
    return (radio * radio) * PI;
}
console.groupEnd();


// aqui interactuamos con el HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCruadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = perimetroCruadrado(value);
    alert(area);

}

//Interactuando con el HTML para el triangulo
function trianguloIso(){
    let lado1 = document.getElementById("isoLado1");
    let iLado1 = parseFloat(lado1.value);

    let lado2 = document.getElementById("isoLado2");
    let iLado2 = parseFloat(lado2.value);

    let base = document.getElementById("isoBase");
    let iBase = parseFloat(base.value);

    if(iLado1 != iLado2){
        alert("No se puede calcular debido a que los lados son diferentes");
    }else{
        const pequenoLado2 = iBase /2; 
        const pequenoBase = iLado1;

        const pequenoLado2Cuadrado = pequenoLado2 * pequenoLado2;
        const pequenoBaseCuadrado = pequenoBase * pequenoBase;
         
        let pequenoLado1 = Math.sqrt(pequenoBaseCuadrado - pequenoLado2Cuadrado);

        const grandeAltura = pequenoLado1;
        alert(`La altura del triangulo es: ${grandeAltura}cm`);
    }
}




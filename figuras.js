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
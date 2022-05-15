let numeros = Number(prompt("Ingrese la cantidad de arreglos"));
let arregloInvertido: number[] = new Array(numeros);
let indice: number;

for (indice = 0; indice < numeros; indice++) {
  arregloInvertido[indice] = Number(prompt("Ingrese los numeros"));
}
let indice: number;
for (indice = numeros - 1; indice >= 0; indice--) {
  console.log("Los numeros invertidos son " + arregloInvertido[indice]);
}

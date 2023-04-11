"use strict";
var n = 10, m = 0;
var h1 = -1, h2 = 0;
function animar1() {
    var caja = document.getElementById("caja1");
    n--;
    if (n == -1)
        n = 10;
    caja.textContent = n.toString();
    console.log("test animar 1 ..." + n);
}
function animar2() {
    var caja = document.getElementById("caja2");
    m++;
    if (m == 10)
        m = 0;
    caja.textContent = m.toString();
    console.log("\t\t\t\t\ttest animar 2..." + n);
}
function iniciar1() {
    console.log("Iniciar animación 1...");
    h1 = setInterval(animar1, 1000);
    return true;
}
function parar1() {
    console.log("Parar animación 1...");
    clearInterval(h1);
    return true;
}
function iniciar2() {
    console.log("\t\t\t\t\tIniciar animación 2...");
    h2 = setInterval(animar2, 1000);
    return true;
}
function parar2() {
    console.log("\t\t\t\t\tParar animación 2...");
    clearInterval(h2);
    return true;
}

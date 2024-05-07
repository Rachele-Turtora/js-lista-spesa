"use strict";

const listaSpesa = ["uova", "latte", "cereali", "estathè", "pasta",];
let count = 0;

const ul = document.getElementById("lista");

while (count < listaSpesa.length) {
    const li = document.createElement("li");
    li.append(listaSpesa[count]);
    ul.append(li);
    count++;
}

/*
do{
    const li = document.createElement("li");
    li.append(listaSpesa[count]);
    ul.append(li);
    count++;
} while (count !== listaSpesa.length);
*/
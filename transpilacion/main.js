"use strict";
console.log("Hola Mundo");
console.log("David Quiroga");
document.write("Hola clase de Programacion Visual");
document.write("<br>");
document.write("David Quiroga");
class Cliente {
    constructor(name, telefono, id) {
        //this.id = id;
        this.name = name;
        this.telefono = telefono;
    }
}
let cliente = new Cliente("Juanito", 1313131);
console.log(cliente.name, "Y su numero de telefono es", cliente.telefono);
let cliente2 = new Cliente("Pedro", 988163131);
console.log(cliente2.name, "Y su numero de telefono es", cliente.telefono);
class Saludo {
    constructor(saludo) {
        this.saludo = saludo;
    }
}
let saludo = new Saludo("Hola, ¿como estan? :D");
console.log(saludo.saludo);
document.write("<br>");
document.write(saludo.saludo);

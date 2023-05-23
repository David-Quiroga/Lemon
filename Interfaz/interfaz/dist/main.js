"use strict";
//Vehiculos Terrestres
class Camioneta {
    conducir() {
        console.log("La camioneta esta conduciendo");
    }
    ;
    encender() {
        console.log("La camioneta esta ecendida");
    }
    ;
    detener() {
        console.log("La camioneta esta detenido");
    }
    ;
    acelerar() {
        console.log("La camioneta esta acelerando");
    }
    ;
    constructor(modelo, fabricante, numeroLlantas, placa) {
        this.modelo = modelo;
        this.fabricante = fabricante;
        this.numeroLlantas = numeroLlantas;
        this.placa = placa;
    }
}
function procesar(vehiculo) {
    vehiculo.encender();
    vehiculo.detener();
    vehiculo.conducir();
    vehiculo.acelerar();
}
let camioneta = new Camioneta("4x2", "Casa Vaca", 4, 5312);
console.log(" – Inicio de Vehiculos Terrestres");
console.log("** CAMIONETA **");
console.log("> Propiedades de la clase Camioneta");
console.log("El modelo de la camioneta es: ", camioneta.modelo);
console.log("El fabricante es:", camioneta.fabricante);
console.log("Tiene un numero de llantas", camioneta.numeroLlantas);
console.log("La placa de la camioneta es", camioneta.placa);
console.log("> Metodo en la interfaz Vehiculo Terrestre");
camioneta.conducir();
camioneta.encender();
camioneta.detener();
camioneta.acelerar();
class Camion {
    conducir() {
        console.log("El camion esta siendo conducido");
    }
    encender() {
        console.log("El camion esta encendido");
    }
    detener() {
        console.log("El camion esta detenido");
    }
    acelerar() {
        console.log("El camion esta acelerando");
    }
    constructor(modelo, fabricante, numeroLlantas, año) {
        this.modelo = modelo;
        this.fabricante = fabricante;
        this.numeroLlantas = numeroLlantas;
        this.año = año;
    }
}
function andar(camion) {
    camion.encender();
    camion.detener();
    camion.conducir();
    camion.acelerar();
}
let camionsito = new Camion("Volvo FH16", "Volvo Trucks", 10, 2002);
console.log("** CAMION **");
console.log("> Propiedades de la clase camion");
console.log("El modelo del camion es:", camionsito.modelo);
console.log("El fabricante del camion es:", camionsito.fabricante);
console.log("El numero de llantas es:", camionsito.numeroLlantas);
console.log("El año de la camioneta es:", camionsito.año);
console.log("> Metodo en la interfaz Vehiculo Terrestre");
camionsito.conducir();
camionsito.encender();
camionsito.detener();
camionsito.acelerar();
class Automovil {
    conducir() {
        console.log("El automovil esta siendo conducido");
    }
    ;
    encender() {
        console.log("El automovil esta encendido");
    }
    ;
    detener() {
        console.log("El automovil esta detenido");
    }
    ;
    acelerar() {
        console.log("El automovil esta acelerando");
    }
    ;
    constructor(modelo, fabricante, numeroLlantas) {
        this.modelo = modelo;
        this.fabricante = fabricante;
        this.numeroLlantas = numeroLlantas;
    }
}
function conducir(carrito) {
    carrito.encender();
    carrito.detener();
    carrito.conducir();
    carrito.acelerar();
}
let carrito = new Automovil("Ford Mustang", "Ford", 4);
console.log("** Automovil **");
console.log("> Propiedades de la clase automovil");
console.log("El modelo del vehiculo es:", carrito.modelo);
console.log("El fabricante del vehiculo es:", carrito.fabricante);
console.log("El numero de llantas del vehiculo es:", carrito.numeroLlantas);
console.log("> Metodo en la interfaz de Vehiculo Terrestre");
carrito.conducir();
carrito.encender();
carrito.detener();
carrito.acelerar();
console.log(" - Fin de Vehiculos Terrestres");
// Vehiculos Maritimos
class Submarino {
    navegar() {
        console.log("Este submarino esta navegando");
    }
    ;
    encender() {
        console.log("Este submarino esta encendido");
    }
    ;
    detener() {
        console.log("Este submarino esta detenido");
    }
    ;
    acelerar() {
        console.log("Este submarino esta acelerando");
    }
    ;
    constructor(modelo, fabricante, numeroTurbinas) {
        this.modelo = modelo;
        this.fabricante = fabricante;
        this.numeroTurbinas = numeroTurbinas;
    }
}
function embarcar(sub) {
    sub.encender();
    sub.detener();
    sub.navegar();
    sub.acelerar();
}
let sub1 = new Submarino("U-214", "Howaldtswerke-Deutsche", 2);
console.log(" - Inicio Vehiculos Maritimos");
console.log(" ** SUBMARINO **");
console.log("> Propiedades de la clase Submarino");
console.log("El fabricante del submarino es:", sub1.fabricante);
console.log("El modelo del submarino es:", sub1.modelo);
console.log("Su numero de turbinas es:", sub1.numeroTurbinas);
console.log("> Metodo en la interfaz Vehiculo Maritimo");
sub1.navegar();
sub1.encender();
sub1.detener();
sub1.acelerar();
class Barco {
    navegar() {
        console.log("Este barco esta navegando");
    }
    encender() {
        console.log("Este barco esta encendido");
    }
    detener() {
        console.log("Este barco esta detenido");
    }
    acelerar() {
        console.log("Este barco esta acelerado");
    }
    constructor(modelo, fabricante, numeroTurbinas) {
        this.modelo = modelo;
        this.fabricante = fabricante;
        this.numeroTurbinas = numeroTurbinas;
    }
}
function barco(barquito) {
    barquito.encender();
    barquito.detener();
    barquito.navegar();
    barquito.acelerar();
}
let barq1 = new Barco("Titanic", "Harland and Wolff", 4);
console.log(" ** BARCO **");
console.log("> Propiedades de la clase Barco");
console.log("El modelo del barco es:", barq1.modelo);
console.log("El fabricante del barco es:", barq1.fabricante);
console.log("El numero de turbinas en el barco es:", barq1.numeroTurbinas);
console.log("> Metodo en la interfaz Vehiculo Maritimo");
barq1.navegar();
barq1.encender();
barq1.detener();
barq1.acelerar();
class Yate {
    navegar() {
        console.log("Este yate esta navegando");
    }
    encender() {
        console.log("Este yate esta encendido");
    }
    detener() {
        console.log("Este yate esta detenido");
    }
    acelerar() {
        console.log("Este yate esta acelerado");
    }
    constructor(modelo, fabricante, numeroTurbinas) {
        this.modelo = modelo;
        this.fabricante = fabricante;
        this.numeroTurbinas = numeroTurbinas;
    }
}
function yet1(yate) {
    yate.navegar();
    yate.encender();
    yate.detener();
    yate.detener();
}
let yete = new Yate("Azimut Yachts", "Riva 110", 0);
console.log(" ** YATE **");
console.log("> Propiedades de la clase Yate");
console.log("El modelo del yate es:", yete.modelo);
console.log("El fabricante del yate es:", yete.fabricante);
console.log("El numero de turbinas en el yate es:", yete.numeroTurbinas);
console.log("> Metodo en la interfaz Vehiculo Maritimo");
yete.navegar();
yete.encender();
yete.detener();
yete.acelerar();
console.log(" - Fin de Vehiculos Maritimos");
// Vehiculos Aereos
class Helicoptero {
    encender() {
        console.log("El Helicoptero esta encendido");
    }
    ;
    volar() {
        console.log("El Helicoptero esta volando");
    }
    ;
    detener() {
        console.log("El Helicoptero esta detenido en el aire");
    }
    ;
    acelerar() {
        console.log("El Helicoptero esta acelerando");
    }
    ;
    constructor(modelo, fabricante, numeroHelices) {
        this.modelo = modelo;
        this.fabricante = fabricante;
        this.numeroHelices = numeroHelices;
    }
}
function volar(bird) {
    bird.encender();
    bird.volar();
    bird.detener();
    bird.acelerar();
}
let avion1 = new Helicoptero("AH-64", "Boeing", 4);
console.log(" - Inicio de Vehiculos Aereos");
console.log(" ** Helicoptero **");
console.log("> Propiedades de la clase Helicoptero");
console.log("El fabricante es:", avion1.fabricante);
console.log("El modelo del helicoptero es: ", avion1.modelo);
console.log("Su numero de helices es", avion1.numeroHelices);
console.log("> Metodo en la interfaz Vehiculo Aereo");
avion1.encender();
avion1.volar();
avion1.detener();
avion1.acelerar();
class Avion {
    encender() {
        console.log("El avion esta encendido");
    }
    ;
    volar() {
        console.log("El avion esta volando");
    }
    ;
    detener() {
        console.log("El avion esta detenido en el aire");
    }
    ;
    acelerar() {
        console.log("El avion esta acelerando");
    }
    ;
    constructor(modelo, fabricante, numeroHelices) {
        this.modelo = modelo;
        this.fabricante = fabricante;
        this.numeroHelices = numeroHelices;
    }
}
function planear(avion) {
    avion.encender();
    avion.volar();
    avion.detener();
    avion.acelerar();
}
let avion = new Avion("Cessna", "Cessna 172 Skyhawk", 4);
console.log(" ** Avion **");
console.log("> Propiedades de la clase Avion");
console.log("El fabricante es:", avion.fabricante);
console.log("El modelo del avion es: ", avion.modelo);
console.log("Su numero de helices es", avion.numeroHelices);
console.log("> Metodo en la interfaz Vehiculo Aereo");
avion.encender();
avion.volar();
avion.detener();
avion.acelerar();
class Avioneta {
    encender() {
        console.log("La avioneta esta encendido");
    }
    ;
    volar() {
        console.log("La avioneta esta volando");
    }
    ;
    detener() {
        console.log("La avioneta esta detenido en el aire");
    }
    ;
    acelerar() {
        console.log("La avioneta esta acelerando");
    }
    ;
    constructor(modelo, fabricante, numeroHelices) {
        this.modelo = modelo;
        this.fabricante = fabricante;
        this.numeroHelices = numeroHelices;
    }
}
function flai(avioneta) {
    avioneta.encender();
    avioneta.volar();
    avioneta.detener();
    avioneta.acelerar();
}
let avio = new Avioneta("Learjet", "Learjet 45XR", 4);
console.log(" ** Avioneta **");
console.log("> Propiedades de la clase Avioneta");
console.log("El fabricante es:", avio.fabricante);
console.log("El modelo del avion es: ", avio.modelo);
console.log("Su numero de helices es", avio.numeroHelices);
console.log("> Metodo en la interfaz Vehiculo Aereo");
avio.encender();
avio.volar();
avio.detener();
avio.acelerar();

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let persona = [];
let lider = [];
let grupo = [];
function addGroup() {
    let currentGroup = {
        name_group: readHtml("name_group"),
        members: parseInt(readHtml("members")),
        leader: readHtml("leader"),
        correo: readHtml("email")
    };
    grupo.push(currentGroup);
    console.table(grupo);
}
function addLeader() {
    let currentLeader = {
        fullname: readHtml("fullnameleader"),
        age: parseInt(readHtml("age")),
        correo: readHtml("email")
    };
    lider.push(currentLeader);
    console.table(lider);
}
function readHtml(id) {
    return document.getElementById(id).value;
}

import { persona } from "./entities/persona";
import { lider } from "./entities/lider";
import { grupo } from "./entities/grupo";

let persona : persona[] = [];
let lider : lider[] = [];
let grupo :grupo[] = [];

function addGroup(){
    let currentGroup : grupo = {
        name_group : readHtml("name_group"),
        members : parseInt(readHtml("members")),
        leader: readHtml("leader"),
        correo: readHtml("email")
    }
    grupo.push(currentGroup);
    console.table(grupo);
}

function addLeader(){
    let currentLeader: lider = {
        fullname: readHtml("fullnameleader"),
        age: parseInt(readHtml("age")),
        correo: readHtml("email")
    }
    lider.push(currentLeader);
    console.table(lider);
}
function readHtml(id:string) : string{
    return (<HTMLInputElement> document.getElementById(id)).value;
}
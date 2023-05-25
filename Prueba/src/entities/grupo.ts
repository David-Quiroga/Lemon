import { persona } from "./persona";

export interface grupo extends persona{
    name_group:string;
    leader:string;
    members:number;
}
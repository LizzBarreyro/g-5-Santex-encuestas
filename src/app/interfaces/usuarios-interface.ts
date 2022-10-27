import { RouterLink } from "@angular/router";

export interface Usuarios{
    
    nombre_usuario:string;
    email:string;
    nombre: string;
    apellido:string;
    contrasena: string;
    rol_usuario: string;
    id?:string;

    
}
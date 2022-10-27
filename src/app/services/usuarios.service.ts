import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuarios } from '../interfaces/usuarios-interface';

@Injectable()
export class UsuariosService {

constructor(private http:HttpClient) { }
obtenerUsuarios(){

    return this.http.get<any>('/phpServer/index.php');
  
   } 
  
   obtenerUnUsuarios(id:string){
  
    return this.http.get<any>('/phpServer/index.php?id=${id}');
  
   }
  
   agregaUsuarios(formData:Usuarios){
  
    return this.http.post('/phpServer/index.php',formData);
  
   }
  
   editarUsuarios(id:any,formData:Usuarios){
  
    return this.http.put('/phpServer/index.php?id=${id}',formData);
  
   }
  
   eliminarUsuarios(id:string){
  
    return this.http.delete('/phpServer/index.php?id=${id}');
  
   }
  
  }


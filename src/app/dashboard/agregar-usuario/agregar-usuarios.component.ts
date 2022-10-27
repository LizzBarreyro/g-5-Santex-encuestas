import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Usuarios } from 'src/app/interfaces/usuarios-interface';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

declare var $: any;

@Component({
  selector: 'app-agregar-usuarios',
  templateUrl: './agregar-usuarios.component.html',
  styleUrls: ['./agregar-usuarios.component.css']
})
export class AgregarUsuariosComponent implements OnInit {

  usuarios:any;
Usuarios:any=[];
idusuarios:any;
  
  public forma = this.fb.group({
    nombre_usuario:[''],
    email:[''],
    nombre:[''],
    apellido:[''],
    contrasena:[''],
    rol_usuario:[''],


  });

  constructor(private usuariosSvc:UsuariosService, private fb:FormBuilder){

  }

  ngOnInit() {
    this.obtenerUsuarios();

  }

  obtenerUsuarios(){

    this.usuariosSvc.obtenerUsuarios().subscribe((res:Usuarios)=>{
      this.usuarios=res;
      console.log(this.Usuarios);
    })
  }
  
  agregaUsuarios() {
 
    this.usuariosSvc.agregaUsuarios(this.forma.value).subscribe(res=>{
    
     Swal.fire({
       icon:'success',
       title:'Exito',
       text:'Usuario creado correctamente',
       showConfirmButton: true
     }).then((result)=>{

       if (result){
        
       location.reload();
       }
     })

   },(err)=>{
 
     Swal.fire('Error', 'No se pudo agregar usuarios', 'error');
   })
  }

  obtenerUnUsuarios(id:string) {
 
       this.usuariosSvc.obtenerUnUsuarios(id).subscribe((res:Usuarios)=>{
      this.usuarios=res;
     
     this.forma.setValue({
         
       nombre_usuario:this.usuarios[0]['nombre_usuario'],
       email:this.usuarios[0]['email'],
       nombre: this.usuarios[0]['nombre'],
       apellido: this.usuarios[0]['apellido'],
       contrasena: this.usuarios[0]['contrasena'],
       rol_usuario: this.usuarios[0]['rol_usuario'],
       
      });
 
        
      localStorage.setItem('idusuarios', this.usuarios[0]['id']);
   
     })
     } 
    
  editarUsuarios() {

      this.idusuarios = localStorage.getItem('idusuarios')
      
      this.usuariosSvc.editarUsuarios(this.idusuarios, this.forma.value).subscribe(res=>{
        
        Swal.fire({
          icon:'success',
          title:'Exito',
          text:'El usuario se actualizo correctamente',
          confirmButtonText:'Ok'
        }).then((result)=>{
      
          if (result) {
              
            localStorage.removeItem('idusuario');
         
            location.reload();
      
          }
      
        });
      
      
      },(err)=>{
        
           Swal.fire('Error', 'No se puedo actualizar!!', 'error');
      
      });
      
      }
      
  eliminarUsuarios(id:string) {
 
      this.usuariosSvc.eliminarUsuarios(id).subscribe(res=>{

        Swal.fire({
          icon:'question',
          title:'Desea eliminar el usuario? ',
          showCancelButton:true,
          confirmButtonText:'Eliminar'
        
        }).then((result)=>{
      
          if (result.isConfirmed) {
           
            Swal.fire({
      
              icon:'success',
              title:'El usuario se elimino correctamente', 
              confirmButtonText:'ok',
      
            }).then((result)=>{
              
              if (result) {
                
                location.reload();
      
              }
      
      
            },(err)=>{
        
              Swal.fire('Error', 'No se puedo Eliminar el usuario!!', 'error');
         
               })
           
         }
      
       });
      
      })
  }
}

 

 



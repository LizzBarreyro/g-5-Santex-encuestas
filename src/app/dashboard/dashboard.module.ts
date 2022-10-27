import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarUsuariosComponent } from './agregar-usuario/agregar-usuarios.component';
import { ListadoEncuestasComponent } from './listado-encuestas/listado-encuestas.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AgregarUsuariosComponent,
    ListadoEncuestasComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class DashboardModule {
  
 }

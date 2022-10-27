import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './loginusuario/dashboard/dashboard.component';
import { HomeComponent } from './loginusuario/home/home.component';
import { LoginComponent } from './loginusuario/login/login.component';
import { RegistroComponent } from './loginusuario/registro/registro.component';

const routes: Routes = [
  { path: ' ', component: HomeComponent},//pagina principal//
  {path:'Iniciar_sesion',component:LoginComponent},
  {path:'registrar',component:RegistroComponent},
  {path:'area_administradora',component:DashboardComponent, canActivate:[]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

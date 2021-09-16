import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaComponent } from './pulsacion/consulta/consulta.component';
import { RegistroComponent } from './pulsacion/registro/registro.component';


const routes: Routes = [
  {path: 'consulta', component: ConsultaComponent},
  {path: 'registro', component: RegistroComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

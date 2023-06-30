import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticulosReservadosComponent } from './Articulos-reservados/Articulos-reservados.component';
import { ArticulosVendidosComponent } from './Articulos-vendidos/Articulos-vendidos.component';
import { HomeComponent } from './Home/Home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'vendidos', component: ArticulosVendidosComponent},
  {path: 'reservados', component: ArticulosReservadosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes ,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

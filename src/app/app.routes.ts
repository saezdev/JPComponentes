import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { CarritoComponent } from './carrito/carrito.component';

export const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
    title: 'Home page',
  },
  {
    path: 'home',
    component: InicioComponent,
    title: 'Home page',
  },
  {
    path: 'buscador',
    component: BuscadorComponent,
    title: 'Buscador',
  },
  {
    path: 'carrito',
    component: CarritoComponent,
    title: 'Carrito',
  },
];

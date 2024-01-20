import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { MenuNavegacionComponent } from './menu-navegacion/menu-navegacion.component';
import { PieComponent } from './pie/pie.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { InicioComponent } from './inicio/inicio.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, EncabezadoComponent, MenuNavegacionComponent, PieComponent, ArticuloComponent, InicioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'jpComponentes';
}

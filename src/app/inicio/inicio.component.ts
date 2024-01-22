import { Component } from '@angular/core';
import { ArticuloComponent } from '../articulo/articulo.component';
import { ArticulosService } from '../articulos.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [ArticuloComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  articulo:any;
  
  constructor(private bd: ArticulosService) {
    // this.reyesMagos = bd.getReyesMagos();
    // this.reyesMagos = bd.getReyesMagos();
  }

   getRecientes() {
    return this.bd.getArtRecientes(4);
   }
}

import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-articulo',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './articulo.component.html',
  styleUrl: './articulo.component.css'
})
export class ArticuloComponent {
  @Input() articulo:any
  @Input() buscar:any
  
  // constructor (private bd:ArticulosService) {
  //   // this.reyesMagos = bd.getReyesMagos();
  //   // this.articulo = bd.getArticulos();
  //  }

  //  getArticulos() {
  //     return this.bd.getArticulos();
  //  }

  //  getCategorias() {
  //   return this.bd.getCategorias();
  //  }

  //  getRecientes() {
  //   return this.bd.getArtRecientes(3);
  //  }

   
}

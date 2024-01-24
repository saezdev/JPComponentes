import { CurrencyPipe } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { ArticuloCarritoComponent } from '../articulo-carrito/articulo-carrito.component';
import { CarritoService } from '../carrito.service';


@Component({
  selector: 'app-articulo',
  standalone: true,
  imports: [CurrencyPipe, ArticuloCarritoComponent],
  templateUrl: './articulo.component.html',
  styleUrl: './articulo.component.css'
})
export class ArticuloComponent {
  @Input() articulo:any
  @Input() buscar:any

  public bd = inject(CarritoService);


  // private test = inject(ArticuloCarritoComponent);

  // private testing = ArticuloCarritoComponent;

    constructor() {
    // this.reyesMagos = bd.getReyesMagos();
    // this.reyesMagos = bd.getReyesMagos();
  }

  
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


  addToCart(articulo:any) {
    this.bd.addCarrito(articulo);
  }

  addCantidad(articulo:any) {
    this.bd.addCantidad(articulo);
  }

  removeCantidad(articulo:any) {
    this.bd.removeCantidad(articulo);
  }

  

   
}

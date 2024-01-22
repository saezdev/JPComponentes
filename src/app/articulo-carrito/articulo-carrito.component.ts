import { Component, Input, inject } from '@angular/core';
import { ArticulosService } from '../articulos.service';

@Component({
  selector: 'app-articulo-carrito',
  standalone: true,
  imports: [],
  templateUrl: './articulo-carrito.component.html',
  styleUrl: './articulo-carrito.component.css'
})
export class ArticuloCarritoComponent {
  // @Input() articulo:any
  public bd = inject(ArticulosService);

  // private articulo_carrito:Array<any> = [];


  // addArticulosCarrito(articulo:Array<any>) {
  //     this.articulo_carrito.push(articulo);
  // }



}

import { Component, inject } from '@angular/core';
import { ArticuloCarritoComponent } from '../articulo-carrito/articulo-carrito.component';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [ArticuloCarritoComponent],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {

  public bd = inject(CarritoService);


  getTotalCarrito() {
    return this.bd.getTotalPrice().toFixed(2) + " €";
  }

  getArticulosCarrito() {
    return this.bd.getArticulosCarrito();
  }

}

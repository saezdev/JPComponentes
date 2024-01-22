import { Component } from '@angular/core';
import { ArticuloCarritoComponent } from '../articulo-carrito/articulo-carrito.component';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [ArticuloCarritoComponent],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private articulosCarrito: Array<any> = [];
  constructor() { }

  addCarrito(articulo: any) {
    // articulo.cantidad = 0;
    // articulo.subtotal = 0;

    let comprobante = false;

    this.articulosCarrito.forEach(e => {
      if(e.id == articulo.id) {
        comprobante = true;
        e.cantidad++;
      }
    });

    //Si el articulo no se encuentra en el carrito.
    if(!comprobante) {
      articulo.cantidad = 1;
      articulo.subtotal = parseInt(articulo.precio);

      console.log("SUBTOTAL " + articulo.subtotal)
      this.articulosCarrito.push(articulo);
    }
    // Si el articulo se encuentra en el carrito.
    else {
      articulo.subtotal += parseInt(articulo.precio);
      console.log("SUBTOTAL DENTRO DE ELSE: " + articulo.subtotal)
    }


    console.log("ARTICULO AÑADIDO: " + articulo.nombre + " " + articulo.cantidad)

  }

  getArticulosCarrito() {
    return this.articulosCarrito;
  }
}

import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { elementAt } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private articulosCarrito: Array<any> = [];
  constructor() {
    this.articulosCarrito = JSON.parse(localStorage.getItem("carrito") || '[]' ) ;
   }

  addCarrito(articulo: any) {
    let comprobante = false;

    this.articulosCarrito.forEach(e => {
      if(e.id == articulo.id) {
        comprobante = true;
        e.cantidad++;
      }
    });

    //Si el articulo no se encuentra en el carrito.
    if(!comprobante) {

      //Copia de array sin puntero hacia el original
      let newArt = {...articulo}

      // let newArticulo = {
      //   id: articulo.id,
      //   cat: articulo.cat,
      //   fab: articulo.fab,
      //   nombre: articulo.nombre,
      //   imagen: articulo.imagen,
      //   precio: articulo.precio,
      //   unidades: 1
      // }
      articulo.cantidad = 1;
      articulo.subtotal = parseInt(articulo.precio);

      console.log("SUBTOTAL " + articulo.subtotal)
      this.articulosCarrito.push(articulo);

      localStorage.setItem("carrito", JSON.stringify(this.articulosCarrito));

      console.log("EL ARTICULO NO SE ENCUENTRA -> LOCAL STORAGE -> " + this.articulosCarrito);
    }
    // Si el articulo se encuentra en el carrito.
    else {
      articulo.subtotal += parseInt(articulo.precio);
      console.log("SUBTOTAL DENTRO DE ELSE: " + articulo.subtotal)

      localStorage.setItem("carrito", JSON.stringify(this.articulosCarrito));
    }


      // console.log(" LOCAL STORAGE -> " + JSON.parse(localStorage.getItem("carrito")!));
      // console.log(" LOCAL STORAGE SIN JSON PARSE -> " + localStorage.getItem("carrito"));
  }

  removeArticulo(articulo:any) {
    let comprobacion = this.articulosCarrito.find(a => a.id == articulo.id)

    if(comprobacion) {
      // this.articulosCarrito.pop(articulo.id)
    }
  }

  getArticulosCarrito() {
    // return this.articulosCarrito;
    return JSON.parse(localStorage.getItem("carrito")!);
  }

  addCantidad(articulo:any) {
    let art = this.articulosCarrito.findIndex((condicion) => condicion.id === articulo.id);
    this.articulosCarrito[art].cantidad++;
    this.articulosCarrito[art].subtotal += this.articulosCarrito[art].precio;
    localStorage.setItem("carrito", JSON.stringify(this.articulosCarrito));

    // console.log("TEST: " + this.articulosCarrito[0].nombre)
  }

  removeCantidad(articulo:any) {
    let art = this.articulosCarrito.findIndex((condicion) => condicion.id === articulo.id);
    this.articulosCarrito[art].cantidad--;
    this.articulosCarrito[art].subtotal -= this.articulosCarrito[art].precio;
    localStorage.setItem("carrito", JSON.stringify(this.articulosCarrito));
  }

  isAlreadyInCart(articulo:any) {
    return this.articulosCarrito.find( a => a.id == articulo.id);
  }
}

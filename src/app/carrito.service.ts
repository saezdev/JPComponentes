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

      this.articulosCarrito.push(articulo);
      this.saveToLocalStorage();
    }
    // Si el articulo se encuentra en el carrito.
    else {
      // localStorage.setItem("carrito", JSON.stringify(this.articulosCarrito));
      this.saveToLocalStorage();

    }


      // console.log(" LOCAL STORAGE -> " + JSON.parse(localStorage.getItem("carrito")!));
      // console.log(" LOCAL STORAGE SIN JSON PARSE -> " + localStorage.getItem("carrito"));
  }

  removeArticulo(articulo:any) {

    console.log("DENTRO DE REMOVEARTICULO")
    let comprobacion = this.articulosCarrito.findIndex(a => a.id == articulo.id)

    this.articulosCarrito.splice(comprobacion,1);
    this.saveToLocalStorage();

  }

  getArticulosCarrito() {
    return this.articulosCarrito;
    // return JSON.parse(localStorage.getItem("carrito")!);
  }

  addCantidad(articulo:any) {
    let art = this.articulosCarrito.findIndex((condicion) => condicion.id === articulo.id);
    this.articulosCarrito[art].cantidad++;
    this.saveToLocalStorage();
  }

  removeCantidad(articulo:any) {
    let art = this.articulosCarrito.findIndex((condicion) => condicion.id === articulo.id);
    this.articulosCarrito[art].cantidad--;
    this.saveToLocalStorage();

  }

  isAlreadyInCart(articulo:any) {
    return this.articulosCarrito.find( a => a.id == articulo.id);
  }

  getTotalPrice() {
    let total = 0;
    this.articulosCarrito.forEach(e => {
      total += e.precio * e.cantidad;
    });
    return total;
  }

  saveToLocalStorage() {
    localStorage.setItem("carrito", JSON.stringify(this.articulosCarrito));
  }
}

import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { elementAt } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private articulosCarrito: Array<any> = [];
  constructor() { }

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


      console.log(" LOCAL STORAGE -> " + JSON.parse(localStorage.getItem("carrito")!));
      console.log(" LOCAL STORAGE SIN JSON PARSE -> " + localStorage.getItem("carrito"));
  }

  getArticulosCarrito() {
    // return this.articulosCarrito;
    return JSON.parse(localStorage.getItem("carrito")!);
  }

  addCantidad(articulo:any) {


    // articulo.cantidad++;
    // articulo.subtotal += articulo.precio;

    // this.articulosCarrito.push(articulo);
    // localStorage.setItem("carrito", JSON.stringify(this.articulosCarrito));

    
    let art = this.articulosCarrito.findIndex((condicion) => condicion.id === articulo.id);
    this.articulosCarrito[art].cantidad++;
    this.articulosCarrito[art].subtotal += this.articulosCarrito[art].precio;
    localStorage.setItem("carrito", JSON.stringify(this.articulosCarrito));

    // art.cantidad++;
    // art.subtotal += art.precio;

    console.log("TEST: " + this.articulosCarrito[0].nombre)
    // console.log("ART: " + art[0].nombre)

    // localStorage.setItem("carrito", JSON.stringify(this.articulosCarrito));

    // // console.log("PRUEBA FIND " + this.articulosCarrito.find((condicion) => condicion.id === articulo.id).precio);

    // console.log("PRUEBA FIND LOCALSTORAGE -> " + JSON.parse(localStorage.getItem("carrito")!).find((condicion:any) => condicion.id === articulo.id).nombre)



    // // this.articulosCarrito.find((condicion) => condicion.id === articulo.id).nombre
    // // console.log("PRUEBA EN ADDCANTIDAD -> " + art[0].cantidad)

    // // console.log("ESTO ES UNA PRUEBA  " + JSON.parse(localStorage.getItem("carrito")!)[articulo].precio  );
    // articulo.cantidad++;
    // articulo.subtotal += articulo.precio;
  }
}

import { Component, Input, inject } from '@angular/core';
import { ArticulosService } from '../articulos.service';
import { ArticuloComponent } from '../articulo/articulo.component';
import { PatronPipe } from '../pipes/patron.pipe';
import { CategoriaPipe } from '../pipes/categoria.pipe';
import { FabricantesPipe } from '../pipes/fabricantes.pipe';

@Component({
  selector: 'app-buscador',
  standalone: true,
  imports: [ArticuloComponent, PatronPipe, CategoriaPipe, FabricantesPipe],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent {

  private bd = inject(ArticulosService);
  patron = "";
  cat = 0;
  fab = 0;

  // buscar:any;
  // @Input() buscar:any

  // constructor(private bd: ArticulosService) {
  //   // this.reyesMagos = bd.getReyesMagos();
  //   // this.reyesMagos = bd.getReyesMagos();
  // }

  getFabricantes() {
    return this.bd.getFabricantes();
  }

  getArticulos() {
    return this.bd.getArticulos();
   }

   getCategoria() {
    return this.bd.getCategorias();
   }

  articulosMostrar(patron:string) {
    return this.bd.getArticulosPorNombre(patron);
  }

  mostrarProcesadores() {
    return this.bd.getProcesadores();
  }

  // Recuperamos todos los articulos
  articulosParaMostrar = this.bd.getArticulos();


  // filtrarArticulos(patron:string) {
  //   // this.articulosParaMostrar = this.bd.getArticulos().filter(a => a.nombre.tolowercase().includes(patron.toLowerCase());
  //   this.articulosParaMostrar = this.bd.getArticulos().filter(a => a.nombre.toLowerCase().includes(patron.toLowerCase()));
  // }


  // filtrarArticulos() {
  //   this.articulosParaMostrar = this.bd.getArticulos();

  //   // if (this.patron != "") {
  //   //   this.articulosParaMostrar = this.articulosParaMostrar.filter(a => a.nombre.toLowerCase().includes(this.patron.toLowerCase()));
  //   // }

  //   // if (this.cat > 0) {
  //   //   this.articulosParaMostrar = this.articulosParaMostrar.filter( a => a.cat == this.cat);
  //   // }

  //   // if (this.fab > 0) {
  //   //   this.articulosParaMostrar = this.articulosParaMostrar.filter( a => a.fab == this.fab);
  //   // }

  //   return this.articulosParaMostrar;
  // }
  

}

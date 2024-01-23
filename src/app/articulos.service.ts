import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  
  // { id: 1, cat: 1, fab: 1, nombre: "AMD Ryzen 5 3600", precio: 199.90, stock: false, imagen: "https://thumb.pccomponentes.com/w-530-530/articles/21/213019/5-3.jpg", cantidad: 0 }

  private categorias: Array<any> = [
    { id: 1, nombre: "Procesadores" },
    { id: 2, nombre: "Placas base" },
    { id: 3, nombre: "Memoria RAM" },
    { id: 4, nombre: "Tarjetas gráficas" },
    { id: 5, nombre: "Fuentes de alimentación" },
    { id: 6, nombre: "Cajas" }
  ]

  private fabricantes: Array<any> = [
    { id: 1, nombre: "AMD" },
    { id: 2, nombre: "Intel" },
    { id: 3, nombre: "MSI" },
    { id: 4, nombre: "Gigabyte" },
    { id: 5, nombre: "Kingston" },
    { id: 6, nombre: "Corsair" },
    { id: 7, nombre: "PNY" },
    { id: 8, nombre: "Asus" },
    { id: 9, nombre: "Zotac" },
    { id: 10, nombre: "XFX" },
    { id: 11, nombre: "PowerColor" },
    { id: 12, nombre: "EVGA" },
    { id: 13, nombre: "Thermaltake" },
    { id: 14, nombre: "Seasonic" },
    { id: 15, nombre: "Tempest" },
    { id: 16, nombre: "Cooler Master" },
    { id: 17, nombre: "Nox" },
    { id: 18, nombre: "Lian Li" }
  ]

  private articulos: Array<any> = [
    { id: 1, cat: 1, fab: 1, nombre: "AMD Ryzen 5 3600", precio: 199.90, stock: false, imagen: "https://thumb.pccomponentes.com/w-530-530/articles/21/213019/5-3.jpg" },
    { id: 2, cat: 1, fab: 1, nombre: "AMD Ryzen 5 5600X 3.7GHz", precio: 233.99, stock: true, imagen: "https://thumb.pccomponentes.com/w-530-530/articles/32/328475/1101-amd-ryzen-5-5600x-37ghz.jpg" },
    { id: 3, cat: 1, fab: 2, nombre: "Intel Core i7 11700KF", precio: 419.90, stock: true, imagen: "https://thumb.pccomponentes.com/w-300-300/articles/36/362370/1961-intel-core-i7-11700kf-36-ghz.jpg" },
    { id: 4, cat: 2, fab: 3, nombre: "MSI B550i", precio: 179.90, stock: true, imagen: "https://thumb.pccomponentes.com/w-530-530/articles/32/324454/1716-msi-mpg-b550i-gaming-edge-wifi.jpg" },
    { id: 5, cat: 2, fab: 4, nombre: "Gigabyte B560M DS3H V2", precio: 83.99, stock: true, imagen: "https://thumb.pccomponentes.com/w-530-530/articles/61/616583/1293-gigabyte-b560m-ds3h-v2.jpg" },
    { id: 6, cat: 2, fab: 3, nombre: "MSI MPG B550 GAMING PLUS", precio: 148.00, stock: false, imagen: "https://thumb.pccomponentes.com/w-530-530/articles/30/302203/1879-msi-mpg-b550-gaming-plus.jpg" },
    { id: 7, cat: 3, fab: 5, nombre: "Kingston FURY Beast DDR4 3200 MHz 16GB 2x8GB CL16", precio: 70.99, stock: true, imagen: "https://thumb.pccomponentes.com/w-530-530/articles/43/432664/1392-kingston-fury-beast-ddr4-3200-mhz-16gb-2x8gb-cl16.jpg" },
    { id: 8, cat: 3, fab: 6, nombre: "Corsair Vengeance LPX DDR4 3200 PC4-25600 16GB 2X8GB CL16 Negro", precio: 70.99, stock: false, imagen: "https://thumb.pccomponentes.com/w-530-530/articles/26/262822/corsair-vengeance-lpx-ddr4-3200-pc4-25600-16gb-2x8gb-cl16-negro.jpg" },
    { id: 9, cat: 3, fab: 7, nombre: "PNY XLR8 RGB DDR4 3200 PC4-25600 16GB 2x8GB CL16", precio: 87.99, stock: true, imagen: "https://thumb.pccomponentes.com/w-530-530/articles/29/298023/pny-xlr8-rgb-ddr4-3200-pc4-25600-16gb-2x8gb-cl16-especificaciones.jpg" },
    { id: 10, cat: 1, fab: 2, nombre: "Intel Core i5-11400F 2.6 GHz", precio: 155.99, stock: true, imagen: "https://thumb.pccomponentes.com/w-530-530/articles/36/362381/1851-intel-core-i5-11400f-26-ghz.jpg" },
    { id: 11, cat: 1, fab: 2, nombre: "Intel Core i5-12400F 4.4 GHz", precio: 199.99, stock: true, imagen: "https://thumb.pccomponentes.com/w-530-530/articles/83/834922/1636-intel-core-i5-12400f-44-ghz.jpg" },
    { id: 12, cat: 2, fab: 4, nombre: "Gigabyte B550 AORUS ELITE V2", precio: 137.99, stock: true, imagen: "https://thumb.pccomponentes.com/w-530-530/articles/33/332816/1263-gigabyte-b550-aorus-elite-v2.jpg" },
    { id: 13, cat: 2, fab: 8, nombre: "Asus TUF GAMING B450-PLUS II", precio: 93.99, stock: true, imagen: "https://thumb.pccomponentes.com/w-530-530/articles/33/332454/1332-asus-tuf-gaming-b450-plus-ii.jpg" },
    { id: 14, cat: 3, fab: 6, nombre: "Corsair Vengeance RGB Pro Optimizado AMD DDR4 3200 16GB 2x8GB CL16", precio: 95.99, stock: true, imagen: "https://thumb.pccomponentes.com/w-530-530/articles/27/279642/corsair-vengeance-rgb-pro-optimizado-amd-ddr4-3200-16gb-2x8gb-cl16-opiniones.jpg" },
    { id: 15, cat: 4, fab: 9, nombre: "Zotac Gaming GeForce RTX 3080 Trinity LHR 10GB GDDR6X", precio: 859.90, stock: false, imagen: "https://thumb.pccomponentes.com/w-530-530/articles/51/513719/190-zotac-gaming-geforce-rtx-3080-trinity-lhr-10gb-gddr6x.jpg" },
    { id: 16, cat: 4, fab: 3, nombre: "MSI GeForce GTX 1660 SUPER Ventus XS OC 6GB GDDR6", precio: 289.89, stock: true, imagen: "https://thumb.pccomponentes.com/w-530-530/articles/24/245154/6.jpg" },
    { id: 17, cat: 4, fab: 10, nombre: "XFX Speedster SWFT 210 AMD Radeon RX 6600 XT 8GB GDDR6", precio: 399.89, stock: true, imagen: "https://thumb.pccomponentes.com/w-530-530/articles/51/513369/1393-xfx-speedster-swft-210-amd-radeon-rx-6600-xt-8gb-gddr6.jpg" },
    { id: 18, cat: 4, fab: 4, nombre: "Gigabyte GeForce GTX 1660 SUPER OC 6GB GDDR6", precio: 339.99, stock: true, imagen: "https://thumb.pccomponentes.com/w-530-530/articles/24/245161/2019102908460796f7a47f882387bf8717e5e317abe67778-src.jpg" },
    { id: 19, cat: 4, fab: 3, nombre: "MSI AMD Radeon RX 6600 MECH 2X 8GB GDDR6", precio: 380.99, stock: true, imagen: "https://thumb.pccomponentes.com/w-530-530/articles/59/591940/1873-msi-amd-radeon-rx-6600-mech-2x-8gb-gddr6.jpg" },
    { id: 20, cat: 4, fab: 9, nombre: "Zotac Gaming GeForce RTX 3060 Ti Twin Edge LHR 8GB GDDR6", precio: 549.00, stock: true, imagen: "https://thumb.pccomponentes.com/w-530-530/articles/47/475906/1951-zotac-gaming-geforce-rtx-3060-ti-twin-edge-lhr-8gb-gddr6.jpg" },
    { id: 21, cat: 4, fab: 11, nombre: "PowerColor Red Devil AMD Radeon RX 6750XT 12GB GDDR6", precio: 674.89, stock: true, imagen: "https://thumb.pccomponentes.com/w-530-530/articles/1032/10320386/1668-powercolor-red-devil-amd-radeon-rx-6750xt-12gb-gddr6.jpg" },
    { id: 22, cat: 4, fab: 12, nombre: "EVGA GeForce RTX 3090 Ti FTW3 ULTRA 24GB GDDR6X", precio: 2682.54, stock: true, imagen: "https://thumb.pccomponentes.com/w-530-530/articles/1020/10208565/1120-evga-geforce-rtx-3090-ti-ftw3-ultra-24gb-gddr6x.jpg" },
    { id: 23, cat: 5, fab: 13, nombre: "Thermaltake Smart RGB 700W 80 Plus", precio: 56.99, stock: true, imagen: "https://thumb.pccomponentes.com/w-530-530/articles/13/133411/a1.jpg" },
    { id: 24, cat: 5, fab: 6, nombre: "Corsair RM Series RM850 850W 80 Plus Gold Full Modular", precio: 107.99, stock: true, imagen: "https://thumb.pccomponentes.com/w-530-530/articles/47/476776/1847-corsair-rm-series-rm850-850w-80-plus-gold-full-modular.jpg" },
    { id: 25, cat: 5, fab: 14, nombre: "Seasonic B12 BC Series 850W 80 Plus Bronze", precio: 73.99, stock: true, imagen: "https://thumb.pccomponentes.com/w-530-530/articles/38/389875/1160-seasonic-b12-bc-series-850w-80-plus-bronze.jpg" },
    { id: 26, cat: 6, fab: 15, nombre: "Tempest Shade RGB Torre ATX Blanca", precio: 44.99, stock: true, imagen: "https://thumb.pccomponentes.com/w-530-530/articles/38/386827/1479-tempest-shade-usb-30-con-ventana-rgb-blanca.jpg" },
    { id: 27, cat: 6, fab: 6, nombre: "Corsair iCUE 220T RGB Airflow Cristal Templado USB 3.0 Negra", precio: 76.98, stock: true, imagen: "https://thumb.pccomponentes.com/w-530-530/articles/22/222587/a1.jpg" },
    { id: 28, cat: 6, fab: 16, nombre: "Cooler Master MasterBox MB520 RGB Cristal Templado USB 3.0", precio: 96.99, stock: true, imagen: "https://thumb.pccomponentes.com/w-530-530/articles/33/332125/1770-cooler-master-masterbox-mb520-rgb-cristal-templado-usb-32.jpg" },
    { id: 29, cat: 6, fab: 17, nombre: "Nox Infinity SIGMA ARGB Cristal Templado USB 3.0", precio: 58.00, stock: true, imagen: "https://thumb.pccomponentes.com/w-530-530/articles/17/176010/5441.jpg" },
    { id: 30, cat: 6, fab: 18, nombre: "Lian Li PC-O11 Dynamic Cristal Templado USB 3.1 Blanca", precio: 129.98, stock: false, imagen: "https://thumb.pccomponentes.com/w-530-530/articles/25/251201/a2.jpg" }
  ]

  constructor() { }

  getCategorias(): any[] {
    return this.categorias;
  }

  getFabricantes(): any {
    return this.fabricantes;
  }

  getArticulos(): any[] {
    return this.articulos;
  }

  // getArticulosRecientes():any[] {
  //   let recientes = [];

  //   for (let i = this.articulos.length-1; i >= this.articulos.length-3; i--) {
  //     recientes.push(this.articulos[i]);
  //   }

  //   return recientes;
  // }

  getArtRecientes(numArticulos: number) {
    let articulosOrdenados = this.articulos.slice().sort((a, b) => (a.id - b.id))
    return articulosOrdenados.slice(-numArticulos);
  }


  getArticulosPorNombre(nombre: string) {
    let articulosPorNombre = this.getArticulos().includes(nombre);
    return articulosPorNombre;
  }

  getProcesadores() {

    let procesadores: any = [];

    this.articulos.forEach(e => {
      if (e.cat = 1) {
        procesadores.push(e);
      }
    })

    return procesadores;
  }

  



}

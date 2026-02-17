class Producto {
  id: number;
  nombre: string;
  precio: number;
  categoria: string;
  stock: number;
  iva: number;

  constructor(
    id: number,
    nombre: string,
    precio: number,
    categoria: string,
    stock: number
  ) {
    (this.id = id), (this.nombre = nombre);
    (this.precio = precio), (this.categoria = categoria);
    this.stock = stock;
    this.iva = precio * 0.13;
  }

  descuento(descuento: number) {
    const porcentajeDescuento = descuento / 100;
    const cantidadDescuento = this.precio * porcentajeDescuento;
    const descuentoTotal = this.precio - cantidadDescuento;

    console.log("===================================");
    console.log(`Cantidad de producto : ${this.stock}`);
    console.log(`Precio normal del producto: ${this.precio}`);
    console.log(
      `Precio normal: ${this.precio} - Descuento: ${cantidadDescuento} = ${descuentoTotal}`
    );
    console.log(`IVA : ${this.iva}`);
    console.log(
      `Total a pagar (IVA y descuento incluidos) : ${
        ( this.precio + this.iva ) - cantidadDescuento
      }}`
    );
    console.log("===================================");
  }
}


const computadora = new Producto(1, 'HP2012323', 500, 'laptops', 15)
console.log(computadora.descuento(25))
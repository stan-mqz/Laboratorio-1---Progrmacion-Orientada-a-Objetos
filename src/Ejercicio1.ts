class Objeto1 {
    nombre: string;
    apellido: string;
    telefono: number;
    correo: string;
    private codIdentificacion: string

    constructor(nombre: string, apellido: string, telefono: number, correo: string, codIdentificacion: string) {
        this.nombre = nombre,
        this.apellido = apellido,
        this.telefono = telefono,
        this.correo = correo,
        this.codIdentificacion = codIdentificacion
    } 
}


const obj1 = new Objeto1('Stanley', 'Marquez', 72748293, 'stanleymarquez@gmail.com', 'u20250349')

//Objeto completo
console.log(obj1 ,'\n')

//Propiedades de manera individual
console.log(obj1.nombre)
console.log(obj1.apellido)
console.log(obj1.telefono)
console.log(obj1.correo)


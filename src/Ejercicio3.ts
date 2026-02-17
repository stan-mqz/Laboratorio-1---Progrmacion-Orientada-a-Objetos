class Edad {
  fechaNacimiento: string;

  constructor(fechaNacimiento: string) {
    this.fechaNacimiento = fechaNacimiento;
  }

  determinarEdad() {
    const fechaNumerica = parseInt(this.fechaNacimiento.slice(6));
    const edad = 2026 - fechaNumerica;
    return edad;
  }

  verificarEstado() {
    const edad = this.determinarEdad();

    if (edad === 0 || edad <= 2) {
      console.log("Es un bebe");
      console.log("Edad:" + edad);
    } else if (edad >= 3 && edad <= 10) {
      console.log("Es niño/a");
      console.log("Edad:" + edad);
    } else if (edad >= 11 && edad <= 14) {
      console.log("Es preadolescente");
      console.log("Edad:" + edad);
    } else if (edad >= 15 && edad <= 17) {
      console.log("Es adolescente");
      console.log("Edad:" + edad);
    } else if (edad >= 18 && edad <= 30) {
      console.log("Es joven");
      console.log("Edad:" + edad);
    } else if (edad >= 31 && edad <= 50) {
      console.log("Es adulto");
      console.log("Edad:" + edad);
    } else if (edad > 50) {
      console.log("Es adulto mayor");
      console.log("Edad:" + edad);
    }
  }
}

const edad = new Edad("05-06-1943");
edad.verificarEstado();

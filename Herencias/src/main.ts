class Persona {
    public  nombre        :string;
    public  identificacion:string;
    public  edad          :number;
    public  direccion     :string;

    constructor (nombre : string, identificacion:string, edad:number, direccion:string){
        this.nombre         = nombre;
        this.identificacion = identificacion;
        this.edad           = edad;
        this.direccion      = direccion
    }
    saludar(){
        console.log("Mi nombre es " + this.nombre + " y tengo " + this.edad + " ,vivo en el sector de " + this.direccion + " y mi identificación es la siguiente " + this.identificacion )
        console.log("Soy estudiante de la carrera de software")
    }
}

const persona = new Persona("David", "123456789", 22, "Las Cuadras");
persona.saludar();
const per2 = new Persona("Dario", "3131313143", 25, "Solanda");
per2.saludar();


class Estudiante extends Persona{
    public numeroMatricula  : number
    public nivel            : string;
    
    constructor(nombre:string, identificacion:string, edad:number, direccion:string, numeroMatricula:number, nivel:string){
        super(nombre,identificacion,edad,direccion);
        this.numeroMatricula = numeroMatricula;
        this.nivel           = nivel;

    }

}

class Docente extends Persona {
    public contrato : string;
    public titulo   : string;
    constructor(nombre:string, identificacion:string,edad:number,direccion:string, contrato:string, titulo:string){
        super(nombre,identificacion,edad,direccion);
        this.contrato   = contrato;
        this.titulo     = titulo
    }
}

class Empleado {
    public nombre           : string;
    public horasTrabajadas  : number;
    public salarioPorHora   : number;

    constructor(nombre: string, horasTrabajadas: number, salarioPorHora: number) {
        this.nombre             = nombre;
        this.horasTrabajadas    = horasTrabajadas;
        this.salarioPorHora     = salarioPorHora;
    }
    public calcularSueldo(): number {
      return this.horasTrabajadas * this.salarioPorHora;
    }
}

const empleado1 = new Empleado("Juan", 500, 20);
console.log(`El sueldo de ${empleado1.nombre} es: ${empleado1.calcularSueldo()}`);

const empleado2 = new Empleado("María", 30, 15);
console.log(`El sueldo de ${empleado2.nombre} es: ${empleado2.calcularSueldo()}`);

let estudiante1 = new Estudiante("1","Tercero", 21, "Las Cuadras", 120, "Segundo");
estudiante1.saludar

//let docente1    = new Docente ("Diego Yanez", "1212", 25, "La marin", "Normal", "Magister")
//console.log(docente1.contrato, docente1.titulo)
class Escuela{
    _nombre: string;
    _alumno: string;
    constructor(nombre: string,alumno: string){
      this._nombre = nombre;
      this._alumno = alumno; 
    }
    agregarCursoUno(){
      const CURSOUNO: string [] = [];
      CURSOUNO.push(this._alumno);
      console.info("Alumno del Curso N° 1: " + CURSOUNO);
    }
    agregarCursoDos(){
      const CURSODOS:string [] = [];
      CURSODOS.push(this._alumno);
      console.info("Alumno del Curso N°2: " + CURSODOS);
    }
  }
  
const jorge = new Escuela("Procesa Sarmiento","Jorge");
const sebastian = new Escuela("Procesa Sarmiento","Sebastian");
const carina = new Escuela("Procesa Sarmiento","Carina");
const alberto = new Escuela("Procesa Sarmiento","Alberto");

jorge.agregarCursoUno();
alberto.agregarCursoUno();
carina.agregarCursoDos();
sebastian.agregarCursoDos();

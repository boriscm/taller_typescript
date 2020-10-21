export class Course 
{
    name: string;
    credits: number;
    professor: string;
  
    constructor(name: string, professor: string, credits: number) {
      this.name = name;
      this.credits = credits;
      this.professor = professor;
    }
}

export class EstudianteData
{
  tipo: string;
  dato: string;
  constructor(tipo: string, dato: string){
    this.tipo = tipo;
    this.dato = dato;
  }
}


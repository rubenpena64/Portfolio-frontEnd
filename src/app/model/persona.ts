export class persona{
   
     id?:number;
     nombre: string;
     apellido: string;
     foto: string;

     constructor (nombre: string, apellido: string, foto:string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.foto = foto;

     }

}
export class persona{
     id?:number;
     nombre: String;
     apellido: String;
     foto: String;

     constructor (nombre: string, apellido: String, foto:String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.foto = foto;

     }

}
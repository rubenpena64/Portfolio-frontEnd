export class Educacion{
    id?:number;
    titulo: string;
    anios: string;
    descrip: string;

    constructor (empresa: string, anios: string, descripcion:string){
       this.titulo = empresa;
       this.anios = anios;
       this.descrip = descripcion;
    }

}
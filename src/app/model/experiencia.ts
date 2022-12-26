export class experiencia{
    id?:number;
    empresa: string;
    anios: string;
    descrip: string;

    constructor (empresa: string, anios: string, descripcion:string){
       this.empresa = empresa;
       this.anios = anios;
       this.descrip = descripcion;
    }

}
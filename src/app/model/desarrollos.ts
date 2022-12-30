export class Desarrollo{
    id?:number;
    titulo: string;
    foto: string;
    link: string;
    descrip: string;

    constructor (empresa: string, foto: string, descripcion:string, link:string){
       this.titulo = empresa;
       this.foto = foto;
       this.descrip = descripcion;
       this.link=link;
    }
}
export class Acerca{
    id?:number;
    linea1: string;
    linea2: string;
    linea3: string;

    constructor (linea1: string, linea2: string, linea3: string){
       this.linea1 = linea1;
       this.linea2 = linea2;
       this.linea3 = linea3;
       this.id = 1;
    }

}
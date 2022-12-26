export class Habilidad{
    id?:number;
    habilidad: string;
    nivel: string;
    largoBarra: number;
    

    constructor (skill: string, nivel: string){
       this.habilidad = skill;
       this.nivel = nivel;   
       this.largoBarra=0;    
    }
}
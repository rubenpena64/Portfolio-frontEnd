export class LoginDat{
       
    nombre: string;
    pass: string;
  
    constructor (user: string, pass: string){
       this.nombre = user;
       this.pass = pass;
    }

}
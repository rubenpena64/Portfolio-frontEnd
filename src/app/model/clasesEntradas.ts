/*Clases usada para el envio de datos al formulario para agregar/modificar*/
/*En txBt viaje el texto del boton (agregar o modificar) y en resultado vuelve si se canceló*/

export class TripleTexto{
    /* Usada para educacion y experiencia*/
    tx1:string;
    tx2:string;
    tx3:string;
    txBt: string="";
    Resultado:string="";

    constructor(texto1: string, texto2: string, texto3:string, textoBoton:string){
        this.tx1=texto1;
        this.tx2=texto2;
        this.tx3=texto3;
        this.txBt=textoBoton;
    }    
}

export class DobleTexto{
     /* Usada skills*/
    tx1:string;
    tx2:string;   
    txBt: string="";
    Resultado:string="";

    constructor(texto1: string, texto2: string, textoBoton:string){
        this.tx1=texto1;
        this.tx2=texto2;       
        this.txBt=textoBoton;
    }    
}
 export class InDesarrollo{
     /* Usada para desarrollos*/
        tit:string;
        desc:string;   
        link: string;
        img: string
        txBt: string="";
        Resultado:string="";
    
        constructor(tit: string, desc: string, link: string, img:string, textoBoton:string){
            this.tit=tit;
            this.desc=desc;
            this.link = link;
            this.img = img;       
            this.txBt=textoBoton;
        }  
    
}

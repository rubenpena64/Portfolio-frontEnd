import { Component, Input, OnInit } from '@angular/core';
import { GetdatosService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {


  public skillsLista: Array<{ nombre: string; valor: number; largoBarra :number }> = [];


   constructor(public datosPorfolio: GetdatosService) { }

 ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data => {
      this.skillsLista = data.skills;
      
     this.skillsLista.forEach(element => {
     element.largoBarra =this.calculaLargoBarra(element.valor)
     });       
    });
  }
  
calculaLargoBarra(valor:number){
  return  472 - 435 * valor  /100; 
}

  mostrarElemento(indi: number):void{   
    alert ( "Total de entradas: " + this.skillsLista.length + "\n" +
      this.skillsLista[indi].nombre + "\n" 
    + this.skillsLista[indi].valor);
  }

  borrarElemento (indi: number): void{
    this.skillsLista.splice(indi,1);
  }
  agregarElemento(): void{
    this.skillsLista.unshift({ nombre:"Skill", valor:25, largoBarra: this.calculaLargoBarra(25)});
  }
}

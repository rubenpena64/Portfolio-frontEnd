import { Component, Input, OnInit } from '@angular/core';
import { GetdatosService } from 'src/app/servicios/porfolio.service';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})

export class ExperienciaComponent implements OnInit {

  public miExperiencia: Array<{ empresa: string; anios: string; puesto :string }> = [];

  constructor(public datosPorfolio: GetdatosService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data => {
      this.miExperiencia = data.experiencia;
      });
  }
  mostrarElemento(indi: number):void{   
    alert ( "Total de entradas: " + this.miExperiencia.length + "\n" +
      this.miExperiencia[indi].empresa + "\n" + this.miExperiencia[indi].anios + "\n"  
    + this.miExperiencia[indi].puesto);
  }

  borrarElemento (indi: number): void{
    this.miExperiencia.splice(indi,1);
  }
  agregarElemento(): void{
    this.miExperiencia.unshift({ empresa:"Nuevo titulo", anios:"2030" ,puesto:"La descripción del titulo"});
  }
  
}
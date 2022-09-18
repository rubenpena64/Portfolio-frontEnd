import { Component, Input, OnInit } from '@angular/core';
import { GetdatosService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  
 
  public mieducacion: Array<{ titulo: string; anios: string; descripcion :string }> = [];

  constructor(public datosPorfolio: GetdatosService) { }



  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data => {
      this.mieducacion = data.educacion;
      });
  }
  mostrarIndice(indi: number):void{   
    alert ( "Total de entradas: " + this.mieducacion.length + "\n" +
      this.mieducacion[indi].titulo + "\n" + this.mieducacion[indi].anios + "\n"  
    + this.mieducacion[indi].descripcion);
  }

  borrarElemento (indi: number): void{
    this.mieducacion.splice(indi,1);
  }
  agregarElemento(): void{
    this.mieducacion.unshift({ titulo:"Nuevo titulo", anios:"2030" ,descripcion:"La descripción del titulo"});
  }
}
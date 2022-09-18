import { Component, Input, OnInit } from '@angular/core';
import { GetdatosService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-desarrollos',
  templateUrl: './desarrollos.component.html',
  styleUrls: ['./desarrollos.component.css']
})
export class DesarrollosComponent implements OnInit {

  public misDesa: Array<{ titulo: string; descripcion: string; tecnologia :string }> = [];

  constructor(public datosPorfolio: GetdatosService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data => {
      this.misDesa = data.desarrollos;
      });
  }
  mostrarElemento(indi: number):void{   
    alert ( "Total de entradas: " + this.misDesa.length + "\n" +
      this.misDesa[indi].titulo + "\n" + this.misDesa[indi].descripcion + "\n"  
    + this.misDesa[indi].tecnologia);
  }

  borrarElemento (indi: number): void{
    this.misDesa.splice(indi,1);
  }
  agregarElemento(): void{
    this.misDesa.unshift({ titulo:"Nuevo desarrollo", descripcion:"Acá va una descripción del desarrollo" ,tecnologia:"tecnologías usadas"});
  }

}

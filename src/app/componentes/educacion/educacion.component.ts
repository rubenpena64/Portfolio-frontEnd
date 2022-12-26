import { Component, Input, OnInit, Output } from '@angular/core';
import { from, Subscription } from 'rxjs';
import { tripleTexto } from 'src/app/model/clasesEntradas';
import { BtServiceService } from 'src/app/servicios/bt-service.service';
import { GetdatosService } from 'src/app/servicios/porfolio.service';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  public mieducacion: Array<{ titulo: string; anios: string; descripcion: string }> = [];

  addFormu: boolean = false;
  editFormu: boolean = false;
  verBt: boolean = false;
  indiceEdit: number = 0;
  textosEditar!: tripleTexto;

  constructor(public datosPorfolio: GetdatosService,private btServ: BtServiceService) {
   this.verBt=btServ.btVisibles();
  }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data => {
      this.mieducacion = data.educacion;
     });
  }
  editarElemento(indi: number): void {
   
    this.indiceEdit = indi;
    this.textosEditar = new tripleTexto(this.mieducacion[indi].titulo, this.mieducacion[indi].anios, this.mieducacion[indi].descripcion, "Modificar");
    this.textosEditar.Resultado = "";
    this.editFormu = true;
  }
  editItemFin(result: tripleTexto) {
    if (result.Resultado != "Cancel") {
      if (this.editFormu) {
        this.mieducacion[this.indiceEdit].titulo = result.tx1;
        this.mieducacion[this.indiceEdit].anios = result.tx2;
        this.mieducacion[this.indiceEdit].descripcion = result.tx3;
      }
      else if (this.addFormu) {
        this.mieducacion.unshift({ titulo: result.tx1, anios: result.tx2, descripcion: result.tx3 });
      }
    }
    this.editFormu = false;
    this.addFormu = false;
  }

  borrarElemento(indi: number): void {
    if (confirm("Esta entrada se va a borrar definitivamente. ¿Está seguro?")) {
      this.mieducacion.splice(indi, 1);
    }
  }
  agregarElemento(): void {
    this.textosEditar = new tripleTexto("Titulo", "Años", "Descripción", "Añadir");
    this.textosEditar.Resultado = "";
    this.addFormu = true;

  }


}
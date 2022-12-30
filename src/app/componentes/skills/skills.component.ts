import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DobleTexto } from 'src/app/model/clasesEntradas';
import { Habilidad } from 'src/app/model/habilidades';
import { BtServiceService } from 'src/app/servicios/bt-service.service';
import { HabilidadService } from 'src/app/servicios/http/habilidad.service';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

/* Todos los componentes funcionan de manera muy similar y solo varian la cantidad y tipo de campos.
El detalle del funcionamiento esta en el componente desarrollos.component.ts 
Este componente varía solo en que hay que calcular la circunferencia del gauge en calculaLargoBarra()
Podría haberlo guardado en la BD pero preferí hacerlo recorriendo la lista al cargar la pagina */

export class SkillsComponent implements OnInit {
  public misSkills: Habilidad[] = [];
  addFormu: boolean = false;
  editFormu: boolean = false;
  verBt?: boolean;
  indiceEdit: number = 0;
  textosEditar!: DobleTexto;
  skillTemp: Habilidad = new Habilidad("","");
  idTemp?: number; // temporal para solucionar el tema de campo del tipo ?

  constructor(public skillSer: HabilidadService,private btServ: BtServiceService, private ruta: Router) {
   // this.verBt=btServ.getBotonesVisibles();
   }

   
   ngOnInit(): void {
    this.cargarTodo();
  }
  cargarTodo(){
     
    this.skillSer.getTodas().subscribe(data => {this.misSkills = data;
  
    /*Se recorre la lista, y se calcula y guarda en el  campo largoBarra*/
    this.misSkills.forEach(element => {
      element.largoBarra =this.calculaLargoBarra(parseInt(element.nivel));
    })
      
    });  
}
  editarElemento(indi: number): void {
   console.log("Click");
    this.indiceEdit = indi;
    this.textosEditar = new DobleTexto(this.misSkills[indi].habilidad, this.misSkills[indi].nivel, "Modificar");
    this.textosEditar.Resultado = "";
    this.editFormu = true;    
  }

calculaLargoBarra(valor:number){
  return  472 - 435 * valor  /100; 
}

editItemFin(result: DobleTexto) {
  if (result.Resultado != "Cancel")
   {     
      this.skillTemp.habilidad= result.tx1;
      this.skillTemp.nivel = result.tx2;
     
      if (this.editFormu) {
      ////// Lio para solucionar tema de variable tipo ?  /////////////
      let idSi: number=0;
      this.idTemp=this.misSkills[this.indiceEdit].id;
      if(this.idTemp!=undefined){
      //////////////////////////////////////////////////////////         
        this.skillSer.updateUna(this.idTemp,this.skillTemp).subscribe(data=>{
          alert("La operación fue realizada exitosamente");
          this.cargarTodo();
        }
        ,err =>{
          alert("Error al modificar");        
        })   
      }        
    }
    else if (this.addFormu) {        
      this.skillSer.saveUna(this.skillTemp).subscribe(data=>{
        alert("La operación fue realizada exitosamente");
        this.cargarTodo();          
      }
      ,err =>{
        alert("Mal");
      })     
    }
  }
  this.editFormu = false;
  this.addFormu = false;
}
borrarElemento (indi: number): void{
  ////// Lio para solucionar tema de variable tipo ?  /////////////
  let idSi: number=0;
  this.idTemp=this.misSkills[indi].id;
  if(this.idTemp!=undefined)
  //////////////////////////////////////////////////////////
      {
      idSi=this.idTemp;
      if (confirm("La entrada de "+  this.misSkills[indi].habilidad  + " se va a borrar definitivamente. ¿Está seguro?")) {
        this.idTemp=this.misSkills[indi].id;
        this.skillSer.borrarUna(idSi ).subscribe(data=>{
          alert("La eliminación fue realizada exitosamente");
          this.cargarTodo();            
        }
        ,err =>{
          alert("Error al elininar");
        })   
      }
    }
}
agregarElemento(): void{
  this.textosEditar = new DobleTexto("", "", "Agregar");
  this.textosEditar.Resultado = "";
  this.addFormu = true;
}


}

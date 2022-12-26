import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { tripleTexto } from 'src/app/model/clasesEntradas';
import { experiencia } from 'src/app/model/experiencia';
import { BtServiceService } from 'src/app/servicios/bt-service.service';
import { ExperienciaService } from 'src/app/servicios/http/experiencia.service';



@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})

export class ExperienciaComponent implements OnInit {

  public misExperiencias: experiencia[] = [];
  addFormu: boolean = false;
  editFormu: boolean = false;
  verBt: boolean = false;
  indiceEdit: number = 0;
  textosEditar!: tripleTexto;
  expeTemp: experiencia = new experiencia("","","" );
  idTemp?: number; // temporal para solucionar el tema de campo del tipo ?

  constructor(public expeSer: ExperienciaService,private btServ: BtServiceService, private ruta: Router) {
   this.verBt=btServ.btVisibles();
  }

  ngOnInit(): void {
    this.cargarTodo();
  }
  cargarTodo(){
    this.expeSer.getTodas().subscribe(data => {this.misExperiencias = data;});
  }
  editarElemento(indi: number): void {
   
    this.indiceEdit = indi;
    this.textosEditar = new tripleTexto(this.misExperiencias[indi].empresa, this.misExperiencias[indi].anios, this.misExperiencias[indi].descrip, "Modificar");
    this.textosEditar.Resultado = "";
    this.editFormu = true;
    
  }

  editItemFin(result: tripleTexto) {
    if (result.Resultado != "Cancel")
     {     
        this.expeTemp.empresa= result.tx1;
        this.expeTemp.anios = result.tx2;
        this.expeTemp.descrip = result.tx3; 
        if (this.editFormu) {
        ////// Lio para solucionar tema de variable tipo ?  /////////////
        let idSi: number=0;
        this.idTemp=this.misExperiencias[this.indiceEdit].id;
        if(this.idTemp!=undefined){
        //////////////////////////////////////////////////////////         
          this.expeSer.updateUna(this.idTemp,this.expeTemp).subscribe(data=>{
            alert("La operación fue realizada exitosamente");
            this.cargarTodo();
          }
          ,err =>{
            alert("Error al modificar");
          
          })   
        }        
      }
      else if (this.addFormu) {        
        this.expeSer.saveUna(this.expeTemp).subscribe(data=>{
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
    this.idTemp=this.misExperiencias[indi].id;
    if(this.idTemp!=undefined)
    //////////////////////////////////////////////////////////
        {
        idSi=this.idTemp;
        if (confirm("La entrada de la empresa "+  this.misExperiencias[indi].empresa  + " se va a borrar definitivamente. ¿Está seguro?")) {
          this.idTemp=this.misExperiencias[indi].id;
          this.expeSer.borrarUna(idSi ).subscribe(data=>{
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
    this.textosEditar = new tripleTexto("Empresa", "Años", "Descripción de tareas", "Añadir");
    this.textosEditar.Resultado = "";
    this.addFormu = true;
  }
 
  
}
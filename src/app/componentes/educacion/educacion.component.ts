import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { from, Subscription } from 'rxjs';
import { TripleTexto } from 'src/app/model/clasesEntradas';
import { Educacion } from 'src/app/model/educacion';
import { BtServiceService } from 'src/app/servicios/bt-service.service';
import { EducacionService } from 'src/app/servicios/http/educacion.service';



@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  public misEduca: Educacion[] = [];
  addFormu: boolean = false;
  editFormu: boolean = false;
  verBt: boolean = false;
  indiceEdit: number = 0;
  textosEditar!: TripleTexto;
  eduTemp: Educacion = new Educacion("","","" );
  idTemp?: number; // temporal para solucionar el tema de campo del tipo ?

  constructor(public eduSer: EducacionService,private btServ: BtServiceService, private ruta: Router) {
    this.verBt=btServ.btVisibles();
   }

   ngOnInit(): void {
    this.cargarTodo();
  }
  cargarTodo(){
    this.eduSer.getTodas().subscribe(data => {this.misEduca = data;});
  }

  editarElemento(indi: number): void {
   
    this.indiceEdit = indi;
    this.textosEditar = new TripleTexto(this.misEduca[indi].titulo, this.misEduca[indi].anios, this.misEduca[indi].descrip, "Modificar");
    this.textosEditar.Resultado = "";
    this.editFormu = true;
    
  }
  
  editItemFin(result: TripleTexto) {
    if (result.Resultado != "Cancel")
     {     
        this.eduTemp.titulo= result.tx1;
        this.eduTemp.anios = result.tx2;
        this.eduTemp.descrip = result.tx3; 
        if (this.editFormu) {
        ////// Lio para solucionar tema de variable tipo ?  /////////////
        let idSi: number=0;
        this.idTemp=this.misEduca[this.indiceEdit].id;
        if(this.idTemp!=undefined){
        //////////////////////////////////////////////////////////         
          this.eduSer.updateUna(this.idTemp,this.eduTemp).subscribe(data=>{
            alert("La operación fue realizada exitosamente");
            this.cargarTodo();
          }
          ,err =>{
            alert("Error al modificar");
          
          })   
        }        
      }
      else if (this.addFormu) {        
        this.eduSer.saveUna(this.eduTemp).subscribe(data=>{
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
    this.idTemp=this.misEduca[indi].id;
    if(this.idTemp!=undefined)
    //////////////////////////////////////////////////////////
        {
        idSi=this.idTemp;
        if (confirm("La entrada de título "+  this.misEduca[indi].titulo  + " se va a borrar definitivamente. ¿Está seguro?")) {
          this.idTemp=this.misEduca[indi].id;
          this.eduSer.borrarUna(idSi ).subscribe(data=>{
            alert("La eliminación fue realizada exitosamente");
            this.cargarTodo();            
          }
          ,err =>{
            alert("Error al elininar");
          })   
        }
      }
  }
  agregarElemento(): void {
    this.textosEditar = new TripleTexto("Titulo", "Años", "Descripción", "Añadir");
    this.textosEditar.Resultado = "";
    this.addFormu = true;

  }


}
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InDesarrollo} from 'src/app/model/clasesEntradas';
import { Desarrollo } from 'src/app/model/desarrollos';
import { BtServiceService } from 'src/app/servicios/bt-service.service';
import { DesarrollosService } from 'src/app/servicios/http/desarrollos.service';


@Component({
  selector: 'app-desarrollos',
  templateUrl: './desarrollos.component.html',
  styleUrls: ['./desarrollos.component.css']
})
export class DesarrollosComponent implements OnInit {

  public misDesa: Desarrollo[] = []; //Coleccion que se llena con el servicio http DesarrollosService
  addFormu: boolean = false; // Usada por ngIf para saber si muestra el formulario para agregar
  editFormu: boolean = false; //Usada por ngIf para saber si muestra el formulario para modificar
  verBt!: boolean; //Usada por ngIf para saber si muestra el los botones de edición
  indiceEdit: number = 0; // usada para saber el indice del elemento que se quiere editar
  textosEditar!: InDesarrollo; //La clase usada para editar o modificar campos.
  desaTemp: Desarrollo = new Desarrollo("","","","" ); // La clase usada para leer un elemento de misDesa
  idTemp?: number; // temporal para solucionar el tema de campo del tipo ?

  constructor(public desaSer: DesarrollosService,private btServ: BtServiceService, private ruta: Router) {  
    
   }

   ngOnInit(): void {
    this.cargarTodo();
  }
  // Se inicializa el componente
  cargarTodo(){
    this.desaSer.getTodas().subscribe(data => {this.misDesa = data;}); // subcripcion al servicio http de datos
    this.btServ.onCambioBotones().subscribe(data => this.verBt = data);  // subcripcion al servicio de visibilidad de botones
    this.verBt = this.btServ.getbotonesVisible();   // Inicializacion de verBt
  }

 /*LLamada por el formulario para editar un elemento
  se ocultan los botones
  se crea un nuevo desarrollo temporal y se rellena con el objeto de misDesa que se quiere editar
  se limpia el campo resultado y se hace visible el formulario en pantalla*/
  editarElemento(indi: number): void {   
    this.btServ.setBtNoVisibles(); // se hacen invisibles los botones de la pagina hasta que se termina de editar
    this.indiceEdit = indi;
    this.textosEditar = new InDesarrollo(this.misDesa[indi].titulo, this.misDesa[indi].descrip, this.misDesa[indi].foto, this.misDesa[indi].link, "Modificar");
    this.textosEditar.Resultado = "";
   
    this.editFormu = true;    
  }
  
  /*Se llama  cuando se cerró el formulario de edición y en resultado si se acepto o canceló*/
  editItemFin(result: InDesarrollo) {
    if (result.Resultado != "Cancel")
     {     
        this.desaTemp.titulo= result.tit;
        this.desaTemp.foto = result.img;
        this.desaTemp.descrip = result.desc; 
        this.desaTemp.link = result.link;      


        // si se está modificando una existente:
        if (this.editFormu) {
        /*////// Lio para solucionar tema de variable tipo ? al tratar de extraer el id del elemento editado /////////////
        si se hace directamente this.misDesa[this.indiceEdit].id= undefined da error*/
        let idSi: number=0;
        this.idTemp=this.misDesa[this.indiceEdit].id;
         //////////////////////////////////////////////////////////     
        if(this.idTemp!=undefined){ 
          // se llama al servicio para editar      
          this.desaSer.updateUna(this.idTemp,this.desaTemp).subscribe(data=>{
            alert("La operación fue realizada exitosamente");
            this.cargarTodo(); // Se vuelve a cargar todo desde la BD
          }
          ,err =>{
            alert("Error al modificar");          
          })   
        }        
      }
        // si se agregó una entrada:
      else if (this.addFormu) {        
        this.desaSer.saveUna(this.desaTemp).subscribe(data=>{
          alert("La operación fue realizada exitosamente");
          this.cargarTodo();  // Se vuelve a cargar todo desde la BD        
        }
        ,err =>{
          alert("Error al agregar");
        })
       
      }
    }
    // En ambos casos se hace invisible el formulario y se vuelven a hacer visibles. los botones
    this.editFormu = false;
    this.addFormu = false;
    this.btServ.setBtVisibles(); // se hacen visibles los botones otra vez
  }
  

  //Para eliminar un elemento, se recibe el indice del elemento a borrar
  borrarElemento (indi: number): void{
    /*////// Lio para solucionar tema de variable tipo ? al tratar de extraer el id del elemento editado /////////////
        si se hace directamente this.misDesa[indi].id= undefined da error*/
    let idSi: number=0;
    this.idTemp=this.misDesa[indi].id;
    if(this.idTemp!=undefined)
    //////////////////////////////////////////////////////////
        {
        idSi=this.idTemp;
        if (confirm("La entrada de título "+  this.misDesa[indi].titulo  + " se va a borrar definitivamente. ¿Está seguro?")) {
          this.idTemp=this.misDesa[indi].id;
          this.desaSer.borrarUna(idSi ).subscribe(data=>{
            alert("La eliminación fue realizada exitosamente");
            this.cargarTodo();   // Se vuelve a cargar todo desde la BD         
          }
          ,err =>{
            alert("Error al elininar");
          })   
        }
      }
  }
   /*LLamada por el formulario para agregar un elemento 
  se crea un nuevo desarrollo temporal y se  llama al constructor con los campos vacios*/
  agregarElemento(): void {
    this.textosEditar = new InDesarrollo("", "", "", "","Añadir");
    this.textosEditar.Resultado = "";
    this.addFormu = true;
    this.btServ.setBtNoVisibles(); // se hacen invisibles los botones hasta que se termina de editar
  }

  invertir(){
    this.btServ.cambiarvisible();
  }

}
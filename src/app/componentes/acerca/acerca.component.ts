import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Acerca } from 'src/app/model/acerca';
import { TripleTexto } from 'src/app/model/clasesEntradas';
import { BtServiceService } from 'src/app/servicios/bt-service.service';
import { AcercaService } from 'src/app/servicios/http/acerca.service';



@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent implements OnInit {

  public miAcerca: Acerca = new Acerca("","","");
  editFormu: boolean = false;
  verBt: boolean = false;
  textosEditar!: TripleTexto;


  constructor( private ruta: Router) {
  }
  ngOnInit(): void {
       }
 /*******  Se quita esto para minimizar la cantidad de servicios a Koyeb *********
  ngOnInit(): void {
   this.cargarTodo();
  }
  cargarTodo() {
    
    //this.aceSer.getAcerca().subscribe(data => { this.miAcerca = data; });
    this.btServ.onCambioBotones().subscribe(data => this.verBt = data);
    this.verBt = this.btServ.getbotonesVisible();
  }
  editar(): void {
    
    this.btServ.setBtNoVisibles();    
    this.textosEditar = new TripleTexto(this.miAcerca.linea1, this.miAcerca.linea2, this.miAcerca.linea3, "Modificar");
    this.textosEditar.Resultado = "";
    this.editFormu = true;
  }
 

  editFin(result: TripleTexto) {
    
    if (result.Resultado != "Cancel") {
      this.miAcerca.linea1 = result.tx1;
      this.miAcerca.linea2 = result.tx2;
      this.miAcerca.linea3 = result.tx3;

      this.aceSer.saveUna(1,this.miAcerca).subscribe(data => {
        alert("La operación fue realizada exitosamente");
        this.cargarTodo();
      }
        , err => {
          alert("Error al modificar");
        })
    }
    this.editFormu = false;    
    this.btServ.setBtVisibles();
  }*/



}
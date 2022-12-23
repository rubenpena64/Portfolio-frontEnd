import { Component, Input, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/servicios/persona.service';
import { GetdatosService } from 'src/app/servicios/porfolio.service';


@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent implements OnInit {

  misDatos: persona = new persona("","","");

  quiensoy: string = "";
  lugar: string = "";
  otros: string = "";

 // constructor(public datosPorfolio: GetdatosService) { }
 constructor(public perServ: PersonaService) { }
/*
  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data => {

      this.quiensoy = data.acerca.quiensoy;
      this.lugar = data.acerca.lugar;
      this.otros = data.acerca.Otros;
    });
  }
  */
  ngOnInit(): void {
    this.perServ.getPersona().subscribe(data =>(this.misDatos = data));
    console.debug(this.misDatos.nombre);
  }

}
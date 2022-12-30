import { Component, Input, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { BtServiceService } from 'src/app/servicios/bt-service.service';
import { PersonaService } from 'src/app/servicios/http/persona.service';
import { GetdatosService } from 'src/app/servicios/porfolio.service';


@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent implements OnInit {

  misDatos: Persona = new Persona("","","");
  quiensoy: string = "";
  lugar: string = "";
  otros: string = "";
  verBt?: boolean ;

 constructor(public perServ: PersonaService, private btServ: BtServiceService) {
  //this.verBt=btServ.getBotonesVisibles();
 }
  ngOnInit(): void {
    this.perServ.getPersona().subscribe(data =>(this.misDatos = data));
    
  }

}
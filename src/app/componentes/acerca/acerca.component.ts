import { Component, Input, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona';
import { BtServiceService } from 'src/app/servicios/bt-service.service';
import { PersonaService } from 'src/app/servicios/http/persona.service';
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
  verBt: boolean = false;

 constructor(public perServ: PersonaService, private btServ: BtServiceService) {
  this.verBt=btServ.btVisibles();
 }
  ngOnInit(): void {
    this.perServ.getPersona().subscribe(data =>(this.misDatos = data));
    
  }

}
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { GetdatosService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  constructor(private datosPorfolio: GetdatosService, private appRoute:Router) { }
  

  ngOnInit(): void {
   
  }
  loguearse(){   
    this.appRoute.navigate(['/login'])    
  }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BtServiceService } from 'src/app/servicios/bt-service.service';


@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  constructor(private btService: BtServiceService, private appRoute:Router) { }
  

  ngOnInit(): void {
   
  }
  loguearse(){   
   this.appRoute.navigate(['/login'])    
  }
}

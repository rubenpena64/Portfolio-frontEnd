import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BtServiceService } from 'src/app/servicios/bt-service.service';


@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  txBoton: string="";
  Logueado!: boolean;
  constructor(private btService: BtServiceService, private appRoute:Router) { }
  

  ngOnInit(): void {  
    this.btService.onCambioTxLogin().subscribe(data => this.txBoton = data);
    this.txBoton =this.btService.getTxLogin();
    this.Logueado = this.btService.getbotonesVisible();
  }
  loguearse(){   
   this.Logueado = this.btService.getbotonesVisible();
   if(this.Logueado)
      {
        this.appRoute.navigate([''])   
        this.btService.cambiarvisible();
      }
      else{
        
        this.appRoute.navigate(['/login'])   
      }
      
  }
}

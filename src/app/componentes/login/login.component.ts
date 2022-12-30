import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BtServiceService } from 'src/app/servicios/bt-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  subs?: Subscription;


  constructor(private btServ: BtServiceService, private appRoute:Router) { }
 
  ngOnInit(): void {
  }

  logeo(){   
   
    this.appRoute.navigate([''])   
    this.btServ.cambiarvisible();
  
  }
}

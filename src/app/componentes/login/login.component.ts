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

  constructor(private btServ: BtServiceService, private appRoute:Router) { }
  subs!: Subscription;
  ngOnInit(): void {
  }

  logeo(){   
    this.btServ.HabiliBotones();
    this.appRoute.navigate([''])    
  }
}

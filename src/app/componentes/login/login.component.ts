import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginDat } from 'src/app/model/login';
import { BtServiceService } from 'src/app/servicios/bt-service.service';
import { LoginService } from 'src/app/servicios/http/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  subs?: Subscription;
  public logi: LoginDat = new LoginDat("","");

  constructor(private btServ: BtServiceService, private appRoute:Router, private login:LoginService) { } 
 
  ngOnInit(): void {
  }

  logeo(){   
       
        this.login.getLogin(this.logi).subscribe(data=>{
          
        this.appRoute.navigate([''])   
        this.btServ.cambiarvisible();
        }
        ,err =>{
          alert("Usuario o contraseña incorrectos");
        
        })   
      }    
     
  }



  


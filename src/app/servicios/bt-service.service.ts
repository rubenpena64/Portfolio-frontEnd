import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BtServiceService {

  private btVisible:boolean=false;

  constructor() { }

  HabiliBotones(): void{   
    this.btVisible = true;       
  }

  btVisibles(): boolean{
    return this.btVisible;
  }
  

 
  
  
}

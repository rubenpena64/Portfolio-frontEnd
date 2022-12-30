import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BtServiceService {


  private btVisible!: boolean;
  private subjet = new Subject<boolean>();
  
  constructor() { }

 public setBtVisibles(): void {   
    this.btVisible = true;
    this.subjet.next(true);
  }
 public setBtNoVisibles(): void {
    this.btVisible = false;
    this.subjet.next(false);
  }

  public onCambioBotones(): Observable<boolean> {   
    return this.subjet.asObservable();
  }

 public cambiarvisible():void {
  this.btVisible = !this.btVisible;
  this.subjet.next(this.btVisible);
 }
 public getbotonesVisible(): boolean{
  return this.btVisible;
 }



}

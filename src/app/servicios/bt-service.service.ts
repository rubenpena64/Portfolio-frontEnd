import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BtServiceService {


  private btVisible!: boolean;
  private subjet = new Subject<boolean>();
  private subdos = new Subject<string>();
  private txLogin="Login";
  
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
  if (this.btVisible)
        this.txLogin ="Logout";
  else
        this.txLogin ="Login";
  this.subdos.next(this.txLogin);
 }
 public getbotonesVisible(): boolean{
  return this.btVisible;
 }

 public getTxLogin(): string{
  return this.txLogin;
 }
 public onCambioTxLogin(): Observable<string> {   
  return this.subdos.asObservable();
}


}

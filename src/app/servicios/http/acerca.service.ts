import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Acerca } from 'src/app/model/acerca';

@Injectable({
  providedIn: 'root'
})
export class AcercaService {

  locAcerca= 'http://localhost:8080/acerca/';
  

  constructor(private httpC: HttpClient) { }
  
  public getAcerca(): Observable<Acerca>{
    return this.httpC.get<Acerca>(this.locAcerca + 'ver');   
  }

  public saveUna(id: number,ace: Acerca): Observable<any>{
      return this.httpC.put<any>(this.locAcerca +  `editar/${id}`,ace);   
    
  }
 
}


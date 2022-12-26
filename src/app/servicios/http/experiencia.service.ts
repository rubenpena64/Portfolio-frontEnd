import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { experiencia } from 'src/app/model/experiencia';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  locExpe= 'http://localhost:8080/expe/';
  

  constructor(private httpC: HttpClient) { }
  
  public getTodas(): Observable<experiencia[]>{
    return this.httpC.get<experiencia[]>(this.locExpe + 'ver');   
  }

  public saveUna(expe: experiencia): Observable<any>{
      return this.httpC.post<any>(this.locExpe + 'crear',expe);   
  }

 
  public updateUna(id: number, expe: experiencia): Observable<any>{
   
    return this.httpC.put<any>(this.locExpe + `editar/${id}`, expe);   
  }

  public borrarUna(id: number): Observable<any>{
    return this.httpC.delete<any>(this.locExpe + `borrar/${id}`);
}
}

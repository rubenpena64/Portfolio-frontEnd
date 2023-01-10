import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Experiencia } from 'src/app/model/experiencia';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  //locExpe= 'http://localhost:8080/expe/';
  locExpe= 'https://wonderful-susanetta-rubenpena64.koyeb.app/expe/';

  
  constructor(private httpC: HttpClient) { }
  
  public getTodas(): Observable<Experiencia[]>{
    return this.httpC.get<Experiencia[]>(this.locExpe + 'ver');   
  }

  public saveUna(expe: Experiencia): Observable<any>{
      return this.httpC.post<any>(this.locExpe + 'crear',expe);   
  }

 
  public updateUna(id: number, expe: Experiencia): Observable<any>{
   
    return this.httpC.put<any>(this.locExpe + `editar/${id}`, expe);   
  }

  public borrarUna(id: number): Observable<any>{
    return this.httpC.delete<any>(this.locExpe + `borrar/${id}`);
}
}

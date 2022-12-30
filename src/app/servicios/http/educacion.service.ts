import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { Educacion } from 'src/app/model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  locExpe = 'http://localhost:8080/edu/';


  constructor(private httpC: HttpClient) { }

  public getTodas(): Observable<Educacion[]> {
    return this.httpC.get<Educacion[]>(this.locExpe + 'ver');
  }

  public saveUna(expe: Educacion): Observable<any> {
    return this.httpC.post<any>(this.locExpe + 'crear', expe);
  }


  public updateUna(id: number, expe: Educacion): Observable<any> {

    return this.httpC.put<any>(this.locExpe + `editar/${id}`, expe);
  }

  public borrarUna(id: number): Observable<any> {
    return this.httpC.delete<any>(this.locExpe + `borrar/${id}`);
  }
}

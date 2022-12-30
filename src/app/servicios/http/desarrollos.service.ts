import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Desarrollo } from 'src/app/model/desarrollos';

@Injectable({
  providedIn: 'root'
})
export class DesarrollosService {
  locExpe = 'http://localhost:8080/proye/';


  constructor(private httpC: HttpClient) { }

  public getTodas(): Observable<Desarrollo[]> {
    return this.httpC.get<Desarrollo[]>(this.locExpe + 'ver');
  }

  public saveUna(expe: Desarrollo): Observable<any> {
    return this.httpC.post<any>(this.locExpe + 'crear', expe);
  }


  public updateUna(id: number, expe: Desarrollo): Observable<any> {

    return this.httpC.put<any>(this.locExpe + `editar/${id}`, expe);
  }

  public borrarUna(id: number): Observable<any> {
    return this.httpC.delete<any>(this.locExpe + `borrar/${id}`);
  }
}
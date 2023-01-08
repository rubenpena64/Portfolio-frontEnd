import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { Educacion } from 'src/app/model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  locEdu = 'https://wonderful-susanetta-rubenpena64.koyeb.app/edu/';
  //locEdu='';

  constructor(private httpC: HttpClient) { }

  public getTodas(): Observable<Educacion[]> {
    return this.httpC.get<Educacion[]>(this.locEdu + 'ver');
  }

  public saveUna(expe: Educacion): Observable<any> {
    return this.httpC.post<any>(this.locEdu + 'crear', expe);
  }


  public updateUna(id: number, expe: Educacion): Observable<any> {

    return this.httpC.put<any>(this.locEdu + `editar/${id}`, expe);
  }

  public borrarUna(id: number): Observable<any> {
    return this.httpC.delete<any>(this.locEdu + `borrar/${id}`);
  }
}

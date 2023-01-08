import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidad } from 'src/app/model/habilidades';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {
  locSkill= 'https://wonderful-susanetta-rubenpena64.koyeb.app/skill/';
  //locSkill='';

  constructor(private httpC: HttpClient) { }
  
  public getTodas(): Observable<Habilidad[]>{
    return this.httpC.get<Habilidad[]>(this.locSkill + 'ver');   
  }

  public saveUna(skill: Habilidad): Observable<any>{
      return this.httpC.post<any>(this.locSkill + 'crear',skill);   
  }

 
  public updateUna(id: number, skill: Habilidad): Observable<any>{
   
    return this.httpC.put<any>(this.locSkill + `editar/${id}`, skill);   
  }

  public borrarUna(id: number): Observable<any>{
    return this.httpC.delete<any>(this.locSkill + `borrar/${id}`);
}
}

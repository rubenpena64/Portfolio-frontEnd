import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginDat } from 'src/app/model/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  locGral = 'https://wonderful-susanetta-rubenpena64.koyeb.app/login/';
  //locGral='http://localhost:8080/login/';
  constructor(private http: HttpClient) { }

  public getLogin(logi: LoginDat): Observable<any> {
    return this.http.post<LoginDat>(this.locGral + 'comp',logi);
  }

}

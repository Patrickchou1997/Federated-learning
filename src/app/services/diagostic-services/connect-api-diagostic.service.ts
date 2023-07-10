import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLoginDiagostic } from 'src/app/interfaces/diagostic-interfaces/user-diagostic-interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConnectApiDiagosticService {

  constructor(private http: HttpClient) { }
  loginDiagostic(username: string, password: string) {
    let model = {
      username: username,
      password: password,
    };
    return this.http.post<UserLoginDiagostic>(environment.apiUrl + '/login', model);
  }
}

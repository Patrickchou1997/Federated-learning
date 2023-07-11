import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DiagnosticMessage } from 'src/app/interfaces/diagostic-interfaces/result-diagnostic-interface';
import { UserLoginDiagostic } from 'src/app/interfaces/diagostic-interfaces/user-diagostic-interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConnectApiDiagosticService {
  constructor(private http: HttpClient) {}
  loginDiagostic(username: string, password: string) {
    let model = {
      username: username,
      password: password,
    };
    return this.http.post<UserLoginDiagostic>(
      environment.apiUrl + '/login',
      model
    );
  }

  getMessage(file: File) {
    let formData = new FormData();
    formData.append('file', file);
    formData.append('token', `${localStorage.getItem('token-diagnostic')}`);
    return this.http.post<DiagnosticMessage>(
      environment.apiUrl + '/return-message',
      formData
    );
  }
}

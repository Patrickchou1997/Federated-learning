import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DentistryService {

  constructor(private http: HttpClient) { }

  base64textString: string | null = null;

  getImage(file: File) {
    let formData = new FormData();
    formData.append('file', file);
    // formData.append('token', `${localStorage.getItem('token-diagnostic')}`);
    return this.http.post<ResponseDentistry>(
      environment.apiUrl + '/upload-dentistry',
      formData
    );
  }
}

export interface ResponseDentistry {
  stateError: boolean;
  base64image: string;}

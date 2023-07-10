import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { OrganizationData } from '../interfaces/organization-data';
import { ProjectDetail } from '../interfaces/project-detail';
import { RoleData } from '../interfaces/role-data';
import { TemplateData } from '../interfaces/template-data';
import { UserLogin, UserRegister } from '../interfaces/user-login';

@Injectable({
  providedIn: 'root',
})
export class ConnectApiService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    let model = {
      username: username,
      password: password,
    };
    return this.http.post<UserLogin>(environment.apiUrl + '/login', model);
  }

  register(
    FName: string,
    LName: string,
    username: string,
    password: string,
    email: string,
    roleID: string,
    siteID: string
  ) {
    let model = {
      userID: 'New',
      FName: FName,
      LName: LName,
      username: username,
      password: password,
      email: email,
      roleID: roleID,
      siteID: siteID,
    };
    return this.http.post<UserRegister>(
      environment.apiUrl + '/register',
      model
    );
  }

  usersManagement() {
    let model = {
      token: localStorage.getItem('token'),
    };
    return this.http.post<any>(environment.apiUrl + '/usersManagement', model);
  }

  approveUser(userID: string) {
    let model = {
      userID: userID,
      token: localStorage.getItem('token'),
    };
    return this.http.post<any>(environment.apiUrl + '/approveUser', model);
  }

  cancelUser(userID: string) {
    let model = {
      userID: userID,
      token: localStorage.getItem('token'),
    };
    return this.http.post<any>(environment.apiUrl + '/cancelUser', model);
  }

  uploadAppFolder(file: File, projTitle: string, templateID: string) {
    // let userID = localStorage.getItem('userID');
    let formData = new FormData();
    formData.append('file', file, file.name);
    formData.append('token', `${localStorage.getItem('token')}`);
    formData.append('projTitle', projTitle);
    formData.append('templateID', templateID);
    return this.http.post<any>(environment.apiUrl + '/upload', formData);
  }

  // submitJob(userId: string, appName: string) {
  //   let model = {
  //     token: localStorage.getItem('token'),
  //   };
  //   return this.http.put<any>(
  //     `${environment.fastApi}/submit_job/${userId}?app_name=${appName}`,
  //     model
  //   );
  // }

  checkStatus() {
    return this.http.get<any>(environment.apiUrl + '/check-app');
  }
  downloadTemplat(templateName: string) {
    var link = document.createElement('a');
    link.href = `${environment.apiUrl}/download?filename=${templateName}.zip`;
    link.download = 'help.pdf';
    link.click();
  }

  getRoles() {
    return this.http.get<RoleData>(`${environment.apiUrl}/roles`);
  }

  getOrganizations() {
    return this.http.get<OrganizationData>(
      `${environment.apiUrl}/organizations`
    );
  }

  getTemplates() {
    return this.http.get<TemplateData>(`${environment.apiUrl}/templates`);
  }

  getProjects() {
    let model = {
      token: localStorage.getItem('token'),
    };
    return this.http.post<ProjectDetail>(
      `${environment.apiUrl}/projects`,
      model
    );
  }

  showStats(jobID: string) {
    return this.http.get<any>(`${environment.apiUrl}/show_stats?j=${jobID}`);
  }

  DownloadML(jobID: string) {
    var link = document.createElement('a');
    link.href = `${environment.fastApi}/download_model/${jobID}`;
    link.click();
  }

  DownloadLog(jobID: string) {
    var link = document.createElement('a');
    link.href = `${environment.fastApi}/download_log/${jobID}`;
    link.click();
  }

  getHead() {
    // const headers = { 'x-access-token': localStorage.getItem('token') };
    const headers = new Headers({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
    // return this.http.get<ProjectDetail>(`${environment.apiUrl}/projects`);
  }
}

import { RoleData } from './../interfaces/role-data';
import { ProjectDetail } from './../interfaces/project-detail';
import { Injectable } from '@angular/core';
import { OrganizationData } from '../interfaces/organization-data';
import { UserData } from '../interfaces/user-data';
import { TemplateData } from '../interfaces/template-data';

@Injectable({
  providedIn: 'root',
})
export class MockDataService {
  constructor() {}
  templates: TemplateData[] = [
    {
      templateID: 'T000000001',
      templateTitle: 'hello-pt',
      templateDescription: 'Example for Test',
      category: 'Category A',
    },
  ];
  users: UserData[] = [
    {
      userID: 1,
      firstName: 'Parnumat',
      lastName: 'Niropas',
      email: 'admin@mahidol.ac.th',
      userName: 'admin',
      password: 'admin',
      roleID: 1,
      organizationID: 1,
      userStatus: true,
    },
    {
      userID: 2,
      firstName: 'Parnumat',
      lastName: 'Niropas',
      email: 'researcher@mahidol.ac.th',
      userName: 'user',
      password: '1234',
      roleID: 2,
      organizationID: 1,
      userStatus: false,
    },
  ];
  findUser(userName: string) {
    let a = this.users.find((x) => x.userName == userName);
    if (a) {
      return true;
    } else {
      return false;
    }
  }
  login(username: string, password: string) {
    let a = this.users.find(
      (x) => x.userName == username && x.password == password
    );
    if (a) {
      localStorage.setItem('firstName', a.firstName);
      localStorage.setItem('lastName', a.lastName);
      localStorage.setItem('email', a.email);
      localStorage.setItem('userName', a.userName);
      localStorage.setItem('userStatus', a.userStatus.toString());
      return true;
    } else {
      return false;
    }
  }
  // monitoringData: ProjectDetail[] = [
  //   {
  //     serverID: 'S00001',
  //     status: 'completed',
  //     title: 'ChestX_FL_classification_2022.05.01',
  //     runNum: 1,
  //     appName: 'hello world',
  //     sites: {
  //       ICT: true,
  //       RAMA: false,
  //       KONKAEN: true,
  //     },
  //   },
  //   {
  //     serverID: 'S00002',
  //     status: 'in-progress',
  //     title: 'ChestX_FL_clustering_2022.05.01',
  //     runNum: 2,
  //     appName: 'custering my file',
  //     sites: {
  //       ICT: true,
  //       RAMA: true,
  //       KONKAEN: true,
  //     },
  //   },
  // ];
}

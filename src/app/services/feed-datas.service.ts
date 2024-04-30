import { TemplateData } from './../interfaces/template-data';
import { MockDataService } from 'src/app/mock/mock-data.service';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { UserData } from '../interfaces/user-data';
import { ConnectApiService } from './connect-api.service';
import { Router } from '@angular/router';
import { UsersManagement } from '../interfaces/user-login';
import { RoleData } from '../interfaces/role-data';
import { OrganizationData } from '../interfaces/organization-data';
import { ProjectDetail } from '../interfaces/project-detail';

@Injectable({
  providedIn: 'root',
})
export class FeedDatasService {
  constructor(private router: Router, private connect: ConnectApiService) {}

  userLoggedin: UserData | any;
  subUserLoggedin = new Subject<UserData>();

  async feedUserRegister(
    FName: string,
    LName: string,
    username: string,
    password: string,
    email: string,
    roleID: string,
    siteID: string
  ) {
    return this.connect
      .register(FName, LName, username, password, email, roleID, siteID)
      .subscribe(
        (data) => {
          if (data.stateError) {
            alert(data.message);
          } else {
            this.router.navigateByUrl('/login');
          }
        },
        (error) => {
          alert(JSON.stringify(error));
        },
        () => {}
      );
  }

  usersManagement: UsersManagement[] | any;
  subUsersManagement = new Subject<UsersManagement[]>();
  async feedUsersManagement() {
    return this.connect.usersManagement().subscribe(
      (data) => {
        if (data.stateError) {
          alert(data.message);
        } else {
          this.usersManagement = data.result;
          this.subUsersManagement.next(this.usersManagement);
        }
      },
      (error) => {
        alert(JSON.stringify(error));
      },
      () => {}
    );
  }

  async feedApproveUser(userID: string) {
    return this.connect.approveUser(userID).subscribe(
      (data) => {
        if (data.stateError) {
          alert(data.message);
        } else {
          alert('Success!');
          this.feedUsersManagement();
        }
      },
      (error) => {
        alert(JSON.stringify(error));
      },
      () => {}
    );
  }

  async feedCancelUser(userID: string) {
    return this.connect.cancelUser(userID).subscribe(
      (data) => {
        if (data.stateError) {
          alert(data.message);
        } else {
          alert('Success!');
          this.feedUsersManagement();
        }
      },
      (error) => {
        alert(JSON.stringify(error));
      },
      () => {}
    );
  }

  roles: RoleData[] | any;
  subRoles = new Subject<RoleData[]>();
  async feedRoles() {
    return this.connect.getRoles().subscribe(
      (data) => {
        this.roles = data;
        this.subRoles.next(this.roles);
      },
      (error) => {
        alert(JSON.stringify(error));
      },
      () => {}
    );
  }

  organizations: OrganizationData[] | any;
  subOrganizations = new Subject<OrganizationData[]>();
  async feedOrganizations() {
    return this.connect.getOrganizations().subscribe(
      (data) => {
        this.organizations = data;
        this.subOrganizations.next(this.organizations);
      },
      (error) => {
        alert(JSON.stringify(error));
      },
      () => {}
    );
  }

  templates: TemplateData[] | any;
  subTemplates = new Subject<TemplateData[]>();
  async feedtemplates() {
    return this.connect.getTemplates().subscribe(
      (data) => {
        this.templates = data;
        this.subTemplates.next(this.templates);
      },
      (error) => {
        alert(JSON.stringify(error));
      },
      () => {}
    );
  }

  projects: ProjectDetail[] | any;
  subProjects = new Subject<ProjectDetail[]>();
  async feedProjects() {
    return this.connect.getProjects().subscribe(
      (data) => {
        this.projects = data;
        this.projects.sort((a: any, b: any) =>
          a.submit_time > b.submit_time ? -1 : 1
        );
        this.subProjects.next(this.projects);
      },
      (error) => {
        alert(JSON.stringify(error));
      },
      () => {}
    );
  }

  async getShowStats(jobID: string) {
    return this.connect.showStats(jobID).subscribe(
      (data) => {
        alert(JSON.stringify(data.details.message));
        this.feedProjects();
      },
      (error) => {
        alert(JSON.stringify(error));
      },
      () => {}
    );
  }
}

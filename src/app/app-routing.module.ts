import { ResultComponent } from './containers/diagnostic/components/result/result.component';
import { UploadComponent } from './containers/diagnostic/components/upload/upload.component';
import { HomeDiagnosticComponent } from './containers/diagnostic/components/home-diagnostic/home-diagnostic.component';
import { MainComponent } from './components/main/main.component';
import { DiagnosticComponent } from './containers/diagnostic/diagnostic.component';
import { UserProfileComponent } from './containers/user-profile/user-profile.component';
import { UsersManagementComponent } from './containers/users-management/users-management.component';
import { NewProjectComponent } from './containers/new-project/new-project.component';
import { MonitoringComponent } from './containers/monitoring/monitoring.component';
import { ReportComponent } from './containers/report/report.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './containers/home/home.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { LoginDiagnosticComponent } from './containers/diagnostic/components/login-diagnostic/login-diagnostic.component';
import { DiagnosticGuard } from './guards/diagnostic.guard';
import { DentistryComponent } from './containers/dentistry/dentistry.component';
import { HomeDentistryComponent } from './containers/dentistry/components/home-dentistry/home-dentistry.component';
import { UploadDentistryComponent } from './containers/dentistry/components/upload-dentistry/upload-dentistry.component';
import { ResultDentistryComponent } from './containers/dentistry/components/result-dentistry/result-dentistry.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        canActivate: [AuthenticationGuard],
      },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      {
        path: 'new-project',
        component: NewProjectComponent,
        canActivate: [AuthenticationGuard],
      },
      {
        path: 'monitoring',
        component: MonitoringComponent,
        canActivate: [AuthenticationGuard],
      },
      {
        path: 'report',
        component: ReportComponent,
        canActivate: [AuthenticationGuard],
      },
      {
        path: 'management',
        component: UsersManagementComponent,
        canActivate: [AuthenticationGuard],
      },
      {
        path: 'profile',
        component: UserProfileComponent,
        canActivate: [AuthenticationGuard],
      },
    ],
  },
  {
    path: 'diagnostic',
    component: DiagnosticComponent,
    children: [
      {
        path: '',
        component: HomeDiagnosticComponent,
        // canActivate: [DiagnosticGuard],
      },
      {
        path: 'upload',
        component: UploadComponent,
        // canActivate: [DiagnosticGuard],
      },
      {
        path: 'result',
        component: ResultComponent,
        // canActivate: [DiagnosticGuard],
      },
      {
        path: 'login',
        component: LoginDiagnosticComponent,
      },
    ],
  },
  {
    path: 'dentistry',
    component: DentistryComponent,
    children: [
      {
        path: '',
        component: HomeDentistryComponent
      },
      {
        path: 'upload',
        component: UploadDentistryComponent
      },
      {
        path: 'result',
        component: ResultDentistryComponent
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

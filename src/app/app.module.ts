import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './containers/home/home.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { RegisterComponent } from './components/register/register.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { NewProjectComponent } from './containers/new-project/new-project.component';
import { MonitoringComponent } from './containers/monitoring/monitoring.component';
import { ReportComponent } from './containers/report/report.component';
import { UserProfileComponent } from './containers/user-profile/user-profile.component';
import { UsersManagementComponent } from './containers/users-management/users-management.component';
import { TableOverviewComponent } from './components/table-overview/table-overview.component';
import { DialogCardComponent } from './components/dialog-card/dialog-card.component';
import { DiagnosticComponent } from './containers/diagnostic/diagnostic.component';
import { UploadComponent } from './containers/diagnostic/components/upload/upload.component';
import { ResultComponent } from './containers/diagnostic/components/result/result.component';
import { HomeDiagnosticComponent } from './containers/diagnostic/components/home-diagnostic/home-diagnostic.component';
import { MainComponent } from './components/main/main.component';
import { LoginDiagnosticComponent } from './containers/diagnostic/components/login-diagnostic/login-diagnostic.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavigationBarComponent,
    RegisterComponent,
    SideBarComponent,
    NewProjectComponent,
    MonitoringComponent,
    ReportComponent,
    UserProfileComponent,
    UsersManagementComponent,
    TableOverviewComponent,
    DialogCardComponent,
    DiagnosticComponent,
    UploadComponent,
    ResultComponent,
    HomeDiagnosticComponent,
    MainComponent,
    LoginDiagnosticComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatSelectModule,
    MatDividerModule,
    MatCardModule,
    MatSlideToggleModule,
    MatTableModule,
    MatChipsModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

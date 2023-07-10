import { Component, NgZone } from '@angular/core';
// import { DialogDetail } from './interfaces/dialog-card-detail';
// import { ControllerComponentsService } from './services/controller-components.service';
// import { DialogCardService } from './services/dialog-card.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // anySideBar: any;
  // sideBarStatus: boolean = this.controlServices.sideBarStatus;

  // dialogData: DialogDetail[] = this.dialog.dialogData;
  // anyDialogData: any;

  constructor(
    // public controlServices: ControllerComponentsService,
    // private zone: NgZone,
    // private dialog: DialogCardService
  ) {
    // this.anySideBar = this.controlServices.subSideBar.subscribe((data) => {
    //   this.zone.run(() => {
    //     this.sideBarStatus = data;
    //   });
    // });
    // this.anyDialogData = this.dialog.subDialogData.subscribe((data) => {
    //   this.zone.run(() => {
    //     this.dialogData = data;
    //   });
    // });
  }
  // ngOnDestroy(): void {
  //   this.anySideBar.unsubscribe();
  //   this.anyDialogData.unsubscribe();
  // }
  // counter(i: number) {
  //   return new Array(i);
  // }
  title = 'federated-learning';
}

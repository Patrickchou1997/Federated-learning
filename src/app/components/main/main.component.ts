import { Component, NgZone, OnInit } from '@angular/core';
import { DialogDetail } from 'src/app/interfaces/dialog-card-detail';
import { ControllerComponentsService } from 'src/app/services/controller-components.service';
import { DialogCardService } from 'src/app/services/dialog-card.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  anySideBar: any;
  sideBarStatus: boolean = this.controlServices.sideBarStatus;

  dialogData: DialogDetail[] = this.dialog.dialogData;
  anyDialogData: any;

  constructor(
    public controlServices: ControllerComponentsService,
    private zone: NgZone,
    private dialog: DialogCardService
  ) {}
  ngOnInit(): void {
    this.anySideBar = this.controlServices.subSideBar.subscribe((data) => {
      this.zone.run(() => {
        this.sideBarStatus = data;
      });
    });
    this.anyDialogData = this.dialog.subDialogData.subscribe((data) => {
      this.zone.run(() => {
        this.dialogData = data;
      });
    });
  }
  ngOnDestroy(): void {
    this.anySideBar.unsubscribe();
    this.anyDialogData.unsubscribe();
  }
  counter(i: number) {
    return new Array(i);
  }
  title = 'federated-learning';
}

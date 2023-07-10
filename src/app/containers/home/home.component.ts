import { Component, OnInit, ViewChild } from '@angular/core';
import { ControllerComponentsService } from 'src/app/services/controller-components.service';
import { DialogCardService } from 'src/app/services/dialog-card.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private control: ControllerComponentsService,
    private dialog: DialogCardService
  ) {}

  ngOnInit(): void {
    this.control.onChangeItem(0);
  }

  addS() {
    this.dialog.addItemSuccess('addItemSuccess');
  }
  addW() {
    this.dialog.addItemWarning('addItemWarning');
  }
  addD() {
    this.dialog.addItemDanger('addItemSuccess');
  }
}

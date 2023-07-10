import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { DialogDetail } from '../interfaces/dialog-card-detail';

@Injectable({
  providedIn: 'root',
})
export class DialogCardService {
  constructor() {}

  dialogData: DialogDetail[] = [];
  subDialogData = new Subject<DialogDetail[]>();

  addItemSuccess(desc: string) {
    let _item: DialogDetail = {
      id: this.dialogData.length + 1,
      status: 'success',
      title: 'Success !',
      desc: desc,
    };
    this.add(_item);
  }

  addItemWarning(desc: string) {
    let _item: DialogDetail = {
      id: this.dialogData.length + 1,
      status: 'warning',
      title: 'Warning !',
      desc: desc,
    };
    this.add(_item);
  }

  addItemDanger(desc: string) {
    let _item: DialogDetail = {
      id: this.dialogData.length + 1,
      status: 'danger',
      title: 'Danger !',
      desc: desc,
    };
    this.add(_item);
  }

  add(item: DialogDetail) {
    this.dialogData.push(item);
    this.subDialogData.next(this.dialogData);
  }

  removeItem(id$: number) {
    this.dialogData.forEach((e, i) => {
      if (e.id == id$) this.dialogData.splice(i, 1);
    });
  }
}

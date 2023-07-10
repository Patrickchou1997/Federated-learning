import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ControllerComponentsService {
  constructor() {}

  subSideBar = new Subject<boolean>();
  sideBarStatus: boolean = false;
  onToggleSideBar() {
    this.sideBarStatus = !this.sideBarStatus;
    this.subSideBar.next(this.sideBarStatus);
  }

  subSideItemNow = new Subject<number>();
  sideItemNow: number = 0;
  onChangeItem(i: number) {
    this.sideItemNow = i;
    this.subSideItemNow.next(this.sideItemNow);
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DialogDetail } from 'src/app/interfaces/dialog-card-detail';

@Component({
  selector: 'app-dialog-card',
  templateUrl: './dialog-card.component.html',
  styleUrls: ['./dialog-card.component.css'],
})
export class DialogCardComponent implements OnInit {
  @Input() item: DialogDetail | any;
  isVisible$ = new BehaviorSubject(true);

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.isVisible$.next(false);
    }, 5000);
  }
}

import { FeedDatasService } from 'src/app/services/feed-datas.service';
import { Component, NgZone, OnInit } from '@angular/core';
import { UsersManagement } from 'src/app/interfaces/user-login';
import { ControllerComponentsService } from 'src/app/services/controller-components.service';

@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.css'],
})
export class UsersManagementComponent implements OnInit {
  constructor(
    private control: ControllerComponentsService,
    private feed: FeedDatasService,
    private zone: NgZone
  ) {}

  usersManagement: UsersManagement[] = this.feed.usersManagement;
  anyUsersManagement: any;
  ngOnDestroy(): void {
    this.anyUsersManagement.unsubscribe();
  }
  ngOnInit(): void {
    this.control.onChangeItem(4);
    this.feed.feedUsersManagement();

    this.anyUsersManagement = this.feed.subUsersManagement.subscribe((data) => {
      this.zone.run(() => {
        this.usersManagement = data;
      });
    });
  }
}

import { UsersManagement } from './../../interfaces/user-login';
import {
  AfterViewInit,
  Component,
  Input,
  NgZone,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FeedDatasService } from 'src/app/services/feed-datas.service';

@Component({
  selector: 'app-table-overview',
  templateUrl: './table-overview.component.html',
  styleUrls: ['./table-overview.component.css'],
})
export class TableOverviewComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'userID',
    'FName',
    'LName',
    'username',
    'email',
    'roleName',
    'siteName',
    'accStatus',
    'prove',
    'cancel',
  ];
  dataSource: MatTableDataSource<UsersManagement>;
  users: UsersManagement[] | any = this.feed.usersManagement;
  anyUsersManagement: any;
  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  // @ViewChild(MatSort) sort: MatSort | any;

  sortedData: UsersManagement[] | any;

  constructor(private feed: FeedDatasService, private zone: NgZone) {
    this.dataSource = new MatTableDataSource(this.users);
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
    this.anyUsersManagement = this.feed.subUsersManagement.subscribe((data) => {
      this.zone.run(() => {
        this.users = data;
        this.dataSource = new MatTableDataSource(this.users);
        this.dataSource.paginator = this.paginator;
      });
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  approve($event: UsersManagement) {
    if (confirm('Approve ' + $event.userID)) {
      this.feed.feedApproveUser($event.userID);
    }
  }
  cancel($event: UsersManagement) {
    if (confirm('Cancel ' + $event.userID)) {
      this.feed.feedCancelUser($event.userID);
    }
  }
  sortData($sort: Sort) {
    const data = this.users.slice();
    if (!$sort.active || $sort.direction === '') {
      this.sortedData = data;
      this.users = this.sortedData;
      this.dataSource = new MatTableDataSource(this.users);
      this.dataSource.paginator = this.paginator;
      return;
    }
    this.sortedData = data.sort((a: any, b: any) => {
      const isAsc = $sort.direction === 'asc';
      switch ($sort.active) {
        case 'userID':
          return compare(a.userID, b.userID, isAsc);
        case 'FName':
          return compare(a.FName, b.FName, isAsc);
        case 'LName':
          return compare(a.LName, b.LName, isAsc);
        case 'username':
          return compare(a.username, b.username, isAsc);
        case 'email':
          return compare(a.email, b.email, isAsc);
        case 'roleName':
          return compare(a.roleName, b.roleName, isAsc);
        case 'siteName':
          return compare(a.siteName, b.siteName, isAsc);
        case 'accStatus':
          return compare(a.accStatus, b.accStatus, isAsc);
        default:
          return 0;
      }
    });
    this.users = this.sortedData;
    this.dataSource = new MatTableDataSource(this.users);
    this.dataSource.paginator = this.paginator;
  }
}
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

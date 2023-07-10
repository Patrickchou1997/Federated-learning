import { ProjectDetail } from './../../interfaces/project-detail';
import { FeedDatasService } from 'src/app/services/feed-datas.service';
import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { MockDataService } from 'src/app/mock/mock-data.service';
import { ControllerComponentsService } from 'src/app/services/controller-components.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ConnectApiService } from 'src/app/services/connect-api.service';

@Component({
  selector: 'app-monitoring',
  templateUrl: './monitoring.component.html',
  styleUrls: ['./monitoring.component.css'],
})
export class MonitoringComponent implements OnInit {
  value = '';
  // status = '';
  // sortBy = '';
  dataSource: MatTableDataSource<ProjectDetail>;
  data: ProjectDetail[] = this.feed.projects;

  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  constructor(
    private control: ControllerComponentsService,
    private feed: FeedDatasService,
    private zone: NgZone,
    private connect: ConnectApiService
  ) {
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.paginator = this.paginator;
  }

  sortedData: ProjectDetail[] = this.feed.projects;
  anyData: any;
  displayedColumns: string[] = [
    'projID',
    'projTitle',
    'appName',
    'duration',
    'submit_time',
    'projStatus',
    'DLmodel',
    'DLexperLOG',
  ];

  ngOnDestroy(): void {
    this.anyData.unsubscribe();
  }
  ngOnInit(): void {
    this.control.onChangeItem(2);
    this.feed.feedProjects();

    this.anyData = this.feed.subProjects.subscribe((data) => {
      this.zone.run(() => {
        this.data = data;
        this.sortedData = data;
        this.dataSource = new MatTableDataSource(this.data);
        this.dataSource.paginator = this.paginator;
      });
    });
  }
  applyFilter() {
    this.dataSource.filter = this.value.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onPressed(_row: ProjectDetail) {
    this.feed.getShowStats(_row.jobID);
  }
  onPressedDL(_row: ProjectDetail) {
    this.connect.DownloadML(_row.jobID);
  }
  onPressedDLLOG(_row: ProjectDetail) {
    this.connect.DownloadLog(_row.jobID);
  }
  sortData($sort: any) {
    const data = this.data.slice();
    if (!$sort.active || $sort.direction === '') {
      this.sortedData = data;
      this.data = this.sortedData;
      this.dataSource = new MatTableDataSource(this.data);
      this.dataSource.paginator = this.paginator;
      return;
    }
    this.sortedData = data.sort((a: any, b: any) => {
      const isAsc = $sort.direction === 'asc';
      switch ($sort.active) {
        case 'projID':
          return compare(a.projID, b.projID, isAsc);
        case 'projTitle':
          return compare(a.projTitle, b.projTitle, isAsc);
        case 'appName':
          return compare(a.appName, b.appName, isAsc);
        case 'duration':
          return compare(a.duration, b.duration, isAsc);
        case 'submit_time':
          return compare(a.submit_time, b.submit_time, isAsc);
        case 'projStatus':
          return compare(a.projStatus, b.projStatus, isAsc);
        case 'DLmodel':
          return compare(a.DLmodel, b.DLmodel, isAsc);
        case 'DLexperLOG':
          return compare(a.DLexperLOG, b.DLexperLOG, isAsc);
        default:
          return 0;
      }
    });
    this.data = this.sortedData;
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.paginator = this.paginator;
  }
  calDuration(d: string) {
    if (d != '') {
      const t = d.split('.');
      return t[0] + ' s';
    }
    return '';
  }
  calDate(d: string) {
    if (d != '') {
      // let newDate = new Date(d);
      const t = d.split('.');
      const dt = t[0].split('T');
      const [YY, MM, DD] = dt[0].split('-');
      return `${MM}/${DD}/${YY} ${dt[1]}`;
    }
    return '';
  }
}
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

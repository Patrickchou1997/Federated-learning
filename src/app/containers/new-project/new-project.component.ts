import { FeedDatasService } from 'src/app/services/feed-datas.service';
import { ConnectApiService } from './../../services/connect-api.service';
import { TemplateData } from './../../interfaces/template-data';
import { ControllerComponentsService } from './../../services/controller-components.service';
import { Component, NgZone, OnInit } from '@angular/core';
import { DialogCardService } from 'src/app/services/dialog-card.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css'],
})
export class NewProjectComponent implements OnInit {
  constructor(
    private control: ControllerComponentsService,
    private connect: ConnectApiService,
    private feed: FeedDatasService,
    private zone: NgZone,
    private dialog: DialogCardService
  ) {}
  userStatus: boolean = false;
  userID: string | any;
  templates: TemplateData[] = this.feed.templates;
  anyTemplates: any;
  templateN: string = '';

  projTitle: string = '';
  file: File | any = null;
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.anyTemplates.unsubscribe();
  }
  ngOnInit(): void {
    this.feed.feedtemplates();
    this.userID = localStorage.getItem('userID');

    this.control.onChangeItem(1);
    let s = localStorage.getItem('userStatus');
    if (s == 'true') {
      this.userStatus = true;
    } else {
      this.userStatus = false;
    }
    this.anyTemplates = this.feed.subTemplates.subscribe((data) => {
      this.zone.run(() => {
        this.templates = data;
      });
    });
  }
  onChange(event: any) {
    this.file = event.target.files[0];
  }
  onSubmit() {
    // if (this.templateN) {
      if (this.projTitle) {
        if (this.file != null) {
          this.uploadAppFolder();
        } else {
          alert('Script not found');
          // document.getElementById('chooseFile')?.click();
        }
      } else {
        document.getElementById('projTitle')?.focus();
      }
    // } else {
    //   alert('Please choose your script template');
    // }
  }
  uploadAppFolder() {
    this.connect
      .uploadAppFolder(this.file, this.projTitle, this.templateN)
      .subscribe(
        (data) => {
          this.dialog.addItemSuccess(`${data.message}`);
          this.projTitle = '';
          this.file = null;
          this.templateN = '';
        },
        (error) => {
          alert(JSON.stringify(error));
        },
        () => {}
      );
  }

  onPressed() {
    this.connect.checkStatus().subscribe(
      (data) => {
        alert(JSON.stringify(data));
      },
      (error) => {
        alert(JSON.stringify(error));
      },
      () => {}
    );
  }
  onPressedDW() {
    let _name = '';
    this.templates.forEach((e, i) => {
      if (e.templateID == this.templateN) {
        _name = this.templates[i].templateTitle;
      }
    });
    if (_name) {
      this.connect.downloadTemplat(_name);
    }
  }
}

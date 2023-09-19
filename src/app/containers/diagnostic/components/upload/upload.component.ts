import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectApiDiagosticService } from 'src/app/services/diagostic-services/connect-api-diagostic.service';
import { FeedDataDiagosticService } from 'src/app/services/diagostic-services/feed-data-diagostic.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
})
export class UploadComponent implements OnInit {
  constructor(
    private router: Router,
    private connect: ConnectApiDiagosticService,
    private feed: FeedDataDiagosticService
  ) {}
  file: File | any = null;
  ngOnInit(): void {}
  onChange(event: any) {
    this.handleFileSelect(event);
  }
  handleFileSelect(evt: any) {
    var files = evt.target.files;
    this.file = files[0];

    if (files && this.file) {
      var reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(this.file);
    }
  }
  _handleReaderLoaded(readerEvt: any) {
    var binaryString = readerEvt.target.result;
    this.feed.base64textString = btoa(binaryString);
  }
  onPressed() {
    if (this.file != null) {
      this.connect.getMessage(this.file).subscribe(
        (data) => {
          if (data.stateError) {
            alert(data.message);
          } else {
            this.feed.diagnosticMessage = data;
            console.log(this.feed.diagnosticMessage)
            this.router.navigateByUrl('/diagnostic/result');
          }
        },
        (error) => {
          alert(error);
          console.log(error);
        }
      );
    } else {
      alert('Please choose image');
    }
  }
}

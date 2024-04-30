import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DentistryService } from '../../service/dentistry.service';

@Component({
  selector: 'app-upload-dentistry',
  templateUrl: './upload-dentistry.component.html',
  styleUrls: ['./upload-dentistry.component.css'],
})
export class UploadDentistryComponent implements OnInit {
  constructor(private router: Router, private dentis: DentistryService) {}
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
    this.dentis.base64textString = btoa(binaryString);
  }
  onPressed() {
    if (this.file != null) {
      this.dentis.getImage(this.file).subscribe(
        (data) => {
          console.log(data)
          if (data.stateError) {
            alert(data);
          } else {
            this.dentis.base64textString = data.base64image;
            this.router.navigateByUrl('/dentistry/result');
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

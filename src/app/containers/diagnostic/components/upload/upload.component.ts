import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
})
export class UploadComponent implements OnInit {
  constructor(private router: Router) {}
  file: File | any = null;
  ngOnInit(): void {}
  onChange(event: any) {
    this.file = event.target.files[0];
  }
  onPressed() {
    (this.file != null)?
      this.router.navigateByUrl('/diagnostic/result'):alert("Please choose image");
  }
}

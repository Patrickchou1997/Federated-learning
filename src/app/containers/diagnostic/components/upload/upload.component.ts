import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DiagnosticMessage } from 'src/app/interfaces/diagostic-interfaces/result-diagnostic-interface';
import { ConnectApiDiagosticService } from 'src/app/services/diagostic-services/connect-api-diagostic.service';
import { FeedDataDiagosticService } from 'src/app/services/diagostic-services/feed-data-diagostic.service';

const diagnosticMessage: DiagnosticMessage = {
  stateError: false,
  message: "Diagnosis complete.",
  diagnosticList: [
    {
      diagno: "Pneumonia",
      prop: 0.845
    },
    {
      diagno: "Bronchitis",
      prop: 0.562
    },
    {
      diagno: "Tuberculosis",
      prop: 0.912
    },
    {
      diagno: "COPD",
      prop: 0.754
    },
    {
      diagno: "Asthma",
      prop: 0.367
    },
    {
      diagno: "Influenza",
      prop: 0.623
    },
    {
      diagno: "Pulmonary Embolism",
      prop: 0.795
    },
    {
      diagno: "Lung Cancer",
      prop: 0.438
    },
    {
      diagno: "Interstitial Lung Disease",
      prop: 0.689
    },
    {
      diagno: "Cystic Fibrosis",
      prop: 0.512
    }
  ],
  warningMessage: "Please follow up on the high probability diagnoses."
};

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
  progressed: boolean = false;
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
      // this.connect.getMessage(this.file).subscribe(
      //   (data) => {
      //     if (data.stateError) {
      //       alert(data.message);
      //     } else {
      //       this.feed.diagnosticMessage = data;
      //       console.log(this.feed.diagnosticMessage)
      //       // this.router.navigateByUrl('/diagnostic/result');
      //     }
      //   },
      //   (error) => {
      //     alert(error);
      //     console.log(error);
      //   }
      // );
    } else {
      alert('Please choose image');
    }
  }

  calculate_prop(prop: any) {
    if (prop < 0.5) {
      return 'LOW';
    } else {
      return `${(prop*100).toFixed(0)}%`;
    }
  }

  diagnosticMessage = diagnosticMessage;
  uploaded = false;
  imageSrc: string | ArrayBuffer | null = null;
  progress = 0;

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageSrc = reader.result;
        this.uploaded = true;
        this.startProgress();
      };
      reader.readAsDataURL(file);
    }
  }

  getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  startProgress() {
    this.progress = 0;
    const interval = setInterval(() => {
      this.progress += this.getRandomNumber(1, 10);
      if (this.progress >= 100) {
        this.progress = 100;
        clearInterval(interval);
        console.log('Finished!!');
        this.progressed = true;
        // Trigger result display logic here
      }
    }, 300); // Simulates a progress every 500ms
  }

  onPressedReset() {
    this.uploaded = false;
    this.progressed = false;
  }
}

import { Component, OnInit } from '@angular/core';
import { DiagnosticMessage } from 'src/app/interfaces/diagostic-interfaces/result-diagnostic-interface';
import { FeedDataDiagosticService } from 'src/app/services/diagostic-services/feed-data-diagostic.service';

const diagnosticMessage: DiagnosticMessage = {
  stateError: false,
  message:
    'The results obtained from the machine learning model indicate that the diagnosis of a chest X-ray image suggests the presence of potential conditions. Each condition is associated with a corresponding probability.',
  diagnosticList: [
    {
      diagno: 'Pneumonia',
      prop: 0.845,
    },
    {
      diagno: 'Bronchitis',
      prop: 0.562,
    },
    {
      diagno: 'Tuberculosis',
      prop: 0.912,
    },
    {
      diagno: 'COPD',
      prop: 0.754,
    },
    {
      diagno: 'Asthma',
      prop: 0.367,
    },
    {
      diagno: 'Influenza',
      prop: 0.623,
    },
    {
      diagno: 'Pulmonary Embolism',
      prop: 0.795,
    },
    {
      diagno: 'Lung Cancer',
      prop: 0.438,
    },
    {
      diagno: 'Interstitial Lung Disease',
      prop: 0.689,
    },
    {
      diagno: 'Cystic Fibrosis',
      prop: 0.512,
    },
  ],
  warningMessage:
    'It is important to note that three probabilities are obtained from a machine learning model and should be interpreted with caution. They serve as indicators for potential conditions, but a definitive diagnosis should be made by a medical professional based on further examination and additional clinical information.',
};

@Component({
  selector: 'app-home-diagnostic',
  templateUrl: './home-diagnostic.component.html',
  styleUrls: ['./home-diagnostic.component.css'],
})
export class HomeDiagnosticComponent implements OnInit {
  constructor(
    // private router: Router,
    // private connect: ConnectApiDiagosticService,
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
      return `${(prop * 100).toFixed(0)}%`;
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
      setTimeout(() => {
        this.scrollToSection('result');
      }, 500);
    } else {
      alert('Please choose image');
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

        // Trigger result display logic here
        setTimeout(() => {
          this.progressed = true;
          setTimeout(() => {
            this.scrollToSection('result');
          }, 500);
        }, 1000);
      }
    }, 300); // Simulates a progress every 500ms
  }

  onPressedReset() {
    this.uploaded = false;
    this.progressed = false;
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

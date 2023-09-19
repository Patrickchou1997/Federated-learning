import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DiagnosticMessage } from 'src/app/interfaces/diagostic-interfaces/result-diagnostic-interface';
import { FeedDataDiagosticService } from 'src/app/services/diagostic-services/feed-data-diagostic.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit {
  constructor(private router: Router, private feed: FeedDataDiagosticService) {}
  base64textString: string | null = this.feed.base64textString;
  diagnosticMessage: DiagnosticMessage = this.feed.diagnosticMessage;

  ngOnInit(): void {
    this.base64textString = this.feed.base64textString;
    if (this.base64textString == null) {
      this.router.navigateByUrl('/diagnostic/upload');
    }
    this.diagnosticMessage = this.feed.diagnosticMessage;
  }
}

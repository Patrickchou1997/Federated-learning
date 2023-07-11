import { Injectable } from '@angular/core';
import { DiagnosticMessage } from 'src/app/interfaces/diagostic-interfaces/result-diagnostic-interface';

@Injectable({
  providedIn: 'root',
})
export class FeedDataDiagosticService {
  constructor() {}
  base64textString: string | null = null;
  diagnosticMessage: DiagnosticMessage | any;
}

export interface DiagnosticMessage {
  stateError: boolean;
  message: string;
  diagnosticList: DiagnosticList[];
  warningMessage: string;
}

export interface DiagnosticList {
  diagno: string;
  prop: number;
}

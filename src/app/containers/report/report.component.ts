import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ControllerComponentsService } from 'src/app/services/controller-components.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
})
export class ReportComponent implements OnInit {
  formReport: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private control: ControllerComponentsService
  ) {
    this.formReport = this.formBuilder.group({
      titleReport: ['', Validators.required],
      descriptionReport: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.control.onChangeItem(3);
  }
  onSubmit() {
    let form = this.formReport.value;
    if (form.titleReport && form.descriptionReport) {
      // console.log(form);
    }
  }
}

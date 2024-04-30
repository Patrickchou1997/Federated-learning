import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DentistryService } from '../../service/dentistry.service';

@Component({
  selector: 'app-result-dentistry',
  templateUrl: './result-dentistry.component.html',
  styleUrls: ['./result-dentistry.component.css'],
})
export class ResultDentistryComponent implements OnInit {
  base64textString: string | null = null;
  constructor(private router: Router, private dentis: DentistryService) {}
  ngOnInit(): void {
    this.base64textString = this.dentis.base64textString;
  }
}

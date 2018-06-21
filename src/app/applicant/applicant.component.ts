import { Component, OnInit } from '@angular/core';
import { Applicant } from '../../model/applicant';
import { Telephone } from '../../model/telephone';
import { Address } from '../../model/address';

@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.css']
})
export class ApplicantComponent implements OnInit {

  applicants: Array<Applicant>;

  constructor() { }

  ngOnInit() {
    this.applicants = new Array<Applicant>();
  }

  public insertApplicant() {
    alert();
  }
}

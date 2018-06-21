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

  applicant: Applicant;

  constructor() { }

  ngOnInit() {

    this.applicant = new Applicant();
    this.applicant.telephones = new Array<Telephone>();
    this.applicant.address = new Array<Address>();

    this.addAddress();
    this.addTelephone();
  }

  public verifyIndexAddress(i) {
    if (i != undefined) {
      if (parseInt(i) + 1 == this.applicant.address.length) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  public verifyIndexTelephone(i) {
    if (i != undefined) {
      if (parseInt(i) + 1 == this.applicant.telephones.length) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  public addTelephone() {
    this.applicant.telephones.push(new Telephone());
  }

  public addAddress() {
    this.applicant.address.push(new Address());
  }

}

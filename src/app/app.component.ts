import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from "@angular/forms";

import { User } from "./models/user";
import { Child } from "./models/child";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  personalObject: User;

  personalDetailsForm
  constructor(public fb: FormBuilder) {

  }
  ngOnInit() {
    this.personalObject = this.getPersonalDetails();
    this.personalDetailsForm = this.fb.group({
      name: [this.personalObject.name || ''],
      nationality: [this.personalObject.nationality || ''],
      gender: [this.personalObject.gender || ''],
      dateOfBirth: [this.personalObject.dateOfBirth || ''],
      mobileNumber: [this.personalObject.mobileNumber || ''],
      email: [this.personalObject.email || ''],
      child: this.fb.array([{
        name: [this.personalObject.child || ''],
        age: [this.personalObject.child || ''],
        gender: [this.personalObject.child || '']
      }])
    })
    console.log(this.personalDetailsForm);
  }

  onSubmit() {
    console.log(this.personalDetailsForm);
  }



  getPersonalDetails(): User {
    return new User(
      'Jim', '', '', new Date(), 971555555555, '', []
    )
  };
}

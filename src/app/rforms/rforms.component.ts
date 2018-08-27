import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '../../../node_modules/@angular/forms';
import { UserNameValidators } from './username.validators';

@Component({
  selector: 'app-rforms',
  templateUrl: './rforms.component.html',
  styleUrls: ['./rforms.component.css']
})
export class RformsComponent {

  form = new FormGroup({
    username: new FormControl('', Validators.required, UserNameValidators.shouldBeUnique),
    password: new FormControl('', Validators.required)

  });

  get username() {
    return this.form.get('username');
  }

  login() {
    this.form.setErrors({
      invalidLogin: true
    });
  }
}

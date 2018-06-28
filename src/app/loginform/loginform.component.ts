import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserNameValidators } from './username.validators';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent {
  form = new FormGroup({
    username: new FormControl('', [Validators.required,
    Validators.minLength(3),
    UserNameValidators.cannotContainSpaces]),
    password: new FormControl('', Validators.required)
  });

  get username() {
    return this.form.get('username');
  }

}

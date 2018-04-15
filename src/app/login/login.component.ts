import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Login} from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: FormGroup;

  constructor(private builder: FormBuilder) {
  }

  ngOnInit(): void {
    this.login = this.builder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submit({value, valid}: {value: Login, valid}) {
    console.log('Value', value);
    console.log('Valid', valid);

    this.reset();
  }

  reset() {
    this.login.reset({username: '', password: ''});
  }
}

import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';
  passwordVisible: boolean = false;


  constructor() {

  }

  ngOnInit() { }

  //This method is responsible for log in
  login() {
    console.log('login');
    //TODO: Implement your login logic here
    console.log('email', this.email);
    console.log('password', this.password);
  }

  //This method is responsible for checking if the form is valid
  isValid() {
    return this.email.trim().length > 0 && this.password.trim().length > 0
  }
  //This method is responsible for toggling the password visibility
  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
}

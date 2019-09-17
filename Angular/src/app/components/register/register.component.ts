import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { DarkModeService } from 'src/app/services/dark-mode.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  username: string = '';
  password: string = '';
  confPass: string = '';
  nameReal: string = '';
  apePat: string = '';
  apeMat: string = '';
  email: string = '';
  rut: string = '';
  passInvalid: boolean = false;
  userInvalid: boolean = false;
  termins: boolean = false;
  terminsError: boolean = false;
  empty: number;
  darkMode: boolean;

  constructor(private user: UserService, private router: Router, private dark: DarkModeService) { }

  ngOnInit() {
    this.dark.darkMode.subscribe(dark => this.darkMode = dark);
  }

  checkCheckBoxvalue(check: any) {
    this.termins = check;
  }

  registerUser() {
    if (!this.termins) {
      this.terminsError = true;
      return;
    }
    if (this.rut.length <= 1) {
      this.empty = 0;
      return;
    }
    if (this.nameReal.length <= 1) {
      this.empty = 1;
      return;
    }
    if (this.apePat.length <= 1) {
      this.empty = 2;
      return;
    }
    if (this.apeMat.length <= 1) {
      this.empty = 3;
      return;
    }
    if (this.email.length <= 1) {
      this.empty = 4;
      return;
    }
    if (this.user.getUsername(this.username)) {
      this.userInvalid = true;
    } else {
      if (this.password === this.confPass && this.password.length > 7) {
        this.user.registerUser(this.username, this.nameReal, this.apePat, this.apeMat, this.email, this.password, this.rut)
        this.router.navigate(['/login']);
      } else {
        this.passInvalid = true;
        return;
      }
    }

  }

}

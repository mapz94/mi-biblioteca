import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { DarkModeService } from 'src/app/services/dark-mode.service';
import { User } from 'src/app/class/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  username = '';
  password = '';
  confPass = '';
  nameReal = '';
  apePat = '';
  apeMat = '';
  email = '';
  rut = '';
  users: User[] = [];
  passInvalid = false;
  userInvalid = false;
  termins = false;
  terminsError = false;
  empty: number;
  darkMode: boolean;

  constructor(private user: UserService, private router: Router, private dark: DarkModeService) { }

  ngOnInit() {
    this.dark.darkMode.subscribe(dark => this.darkMode = dark);
    this.user.getUsers().subscribe(user => this.users = user);
  }

  checkCheckBoxvalue(check: any) {
    this.termins = check;
  }

  getUsername(username: string): boolean {
    for (const i of this.users) {
      if (i.username === this.username) {
        return false;
      }
    }
    return true;
  }

  registerUser(): void {
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
    if (this.getUsername(this.username)) {
      this.userInvalid = true;
    } else {
      if (this.password === this.confPass && this.password.length > 7) {
        this.user.registerUser(this.username, this.nameReal, this.apePat, this.apeMat, this.email, this.password, this.rut);
        this.router.navigate(['/login']);
      } else {
        this.passInvalid = true;
      }
    }
  }
}

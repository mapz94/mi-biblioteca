import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { UserlogService } from 'src/app/services/userlog.service';
import { UserService } from 'src/app/services/user.service';
import { DarkModeService } from 'src/app/services/dark-mode.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  errorLogin: boolean = false;
  remember: boolean;
  id: any;
  checkMode: boolean;
  darkMode: boolean;
  body = document.getElementsByTagName('body') as HTMLCollectionOf<HTMLElement>;

  constructor(private router: Router, private userLog: UserlogService, private user: UserService, private dark: DarkModeService) {

  }

  ngOnInit() {
    this.dark.darkMode.subscribe(dark => this.darkMode = dark);
    this.checkMode = this.darkMode;
    if (this.darkMode) {
      this.body[0].style.backgroundColor = "#2e2e2e";
    } else {
      this.body[0].style.backgroundColor = "#fff";
    }
  }

  checkCheckBoxvalue(check: any) {
    this.remember = check;
  }

  checkDarkMode(check: any) {
    this.dark.setDarkModeValue(check);
    if (this.darkMode) {
      this.body[0].style.backgroundColor = "#2e2e2e";
    } else {
      this.body[0].style.backgroundColor = "#fff";
    }
  }

  validarLogin() {
    this.id = this.user.validarUser(this.username, this.password);
    if (this.id != null) {
      if (this.remember) {
        this.userLog.rememberUser(this.user.getUserRealName(this.id), this.id);
      } else {
        this.userLog.userLog = this.user.getUserRealName(this.id);
      }
      this.userLog.userID = this.id;
      this.router.navigate(['/home']);
    } else {
      this.errorLogin = true;
    }
  }

}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { UserlogService } from 'src/app/services/userlog.service';
import { UserService } from 'src/app/services/user.service';
import { DarkModeService } from 'src/app/services/dark-mode.service';
import { User } from 'src/app/class/User';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  users: User[] = [];
  username = '';
  password = '';
  errorLogin = false;
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
      this.body[0].style.backgroundColor = '#2e2e2e';
    } else {
      this.body[0].style.backgroundColor = '#fff';
    }
    this.user.getUsers().subscribe(user => this.users = user);
  }

  checkCheckBoxvalue(check: any) {
    this.remember = check;
  }

  checkDarkMode(check: any) {
    this.dark.setDarkModeValue(check);
    if (this.darkMode) {
      this.body[0].style.backgroundColor = '#2e2e2e';
    } else {
      this.body[0].style.backgroundColor = '#fff';
    }
  }

  validateAdmin(): boolean {
    if (this.username === 'admin' && this.password === 'admin') {
      if (this.remember) {
        this.userLog.userID = '0';
        this.userLog.userLog = 'Admin';
      }
      this.router.navigate(['/home']);
    } else {
      return true;
    }
  }

  validarLogin() {
    if (this.validateAdmin) {
      // tslint:disable-next-line: prefer-const
      for (let i of this.users) {
        if (i.password === this.password && i.username === this.username) {
          if (this.remember) {
            this.userLog.rememberUser(i.username, String(i.id));
          }
          this.userLog.userID = String(i.id);
          this.userLog.userLog = i.username;
          this.router.navigate(['/home']);
          Swal.fire({position: 'center', title: `Bienvenido ${i.nombre}!`,
                   text: 'Cargando...',
                   timer: 1000,
                  onBeforeOpen: () => {
                    Swal.showLoading(); },
                  onClose: () => {} });
        }
      }
      this.errorLogin = true;
    }
  }
}

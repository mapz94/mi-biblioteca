import { FormsModule } from '@angular/forms';
import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/class/User';
import { HttpService } from 'src/app/services/http.service';
import { ThemeService } from 'src/app/services/theme.service';
import { UserlogService } from 'src/app/services/userlog.service';
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
  check: boolean;
  checkDark: boolean;
  darkMode: boolean;
  innerWidth: number;

  private urlUsers = 'http://localhost:8080/biblio/users';

  constructor(private router: Router, private userLog: UserlogService,
              private httpService: HttpService, private themeService: ThemeService) {

  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.loadUser();
    this.themeService.isDarkTheme.subscribe(dark => this.darkMode = dark);
    this.themeService.setDarkTheme(this.themeService.loadDarkTheme());
    this.checkDark = this.darkMode;
    this.httpService.getAll(this.urlUsers).subscribe(user => this.users = user);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

  checkCheckBoxvalue(check: any) {
    this.remember = check;
  }

  checkDarkMode(check: any) {
    this.themeService.setDarkTheme(check);
  }

  validateAdmin(): boolean {
    if (this.username === 'debuguser' && this.password === 'debuguser') {
      if (this.remember) {
        this.userLog.rememberUser('Admin', '0');
      }
      this.userLog.userID = '0';
      this.userLog.userLog = 'Admin';
      this.router.navigate(['/']);
      Swal.fire({position: 'top', title: `Bienvenido usuario Debug!`,
                   text: 'Cargando...',
                   timer: 1000,
                  onBeforeOpen: () => {
                    Swal.showLoading(); },
                  onClose: () => {} });
    } else {
      return true;
    }
  }

  validarLogin() {
    this.validateAdmin();
    if (this.validateAdmin) {
      // tslint:disable-next-line: prefer-const
      for (let i of this.users) {
        if (i.password === this.password && i.username === this.username) {
          if (this.remember) {
            this.userLog.rememberUser(i.username, String(i.id));
          }
          this.userLog.userID = String(i.id);
          this.userLog.userLog = i.username;
          this.router.navigate(['/']);
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

  loadUser(): void {
    if (localStorage.getItem('usuario_activo') != null && localStorage.getItem('id_activo') != null) {
      this.userLog.userLog = localStorage.getItem('usuario_activo');
      this.userLog.userID = localStorage.getItem('id_activo');
    }
    if (this.userLog.userLog !== null) {
      this.router.navigate(['/']);
    }
  }
}

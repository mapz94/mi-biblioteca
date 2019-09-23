import { Component, HostListener, OnInit } from '@angular/core';
import { UserlogService } from './services/userlog.service';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';
import { DarkModeService } from './services/dark-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Mi biblioteca';
  body = document.getElementsByTagName('body') as HTMLCollectionOf<HTMLElement>;
  darkMode: boolean;
  scrollPos: number;

  constructor(private userLog: UserlogService, private router: Router, private user: UserService, private dark: DarkModeService) {
  }

  ngOnInit() {
    this.dark.setDarkModeValue(this.dark.getDarkModeValue());
    this.dark.darkMode.subscribe(dark => this.darkMode = dark);
    if (this.darkMode) {
    }
    this.scrollUp();
    this.scrollPos = window.pageYOffset;
    this.loadUser();
  }

  loadUser(): void {
    if (localStorage.getItem('usuario_activo') != null && localStorage.getItem('id_activo') != null) {
      this.userLog.userLog = localStorage.getItem('usuario_activo');
      this.userLog.userID = localStorage.getItem('id_activo');
    }
    if (this.userLog.userLog === null) {
      this.router.navigate(['/login']);
    }
  }

  scrollUp() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  @HostListener('window:scroll', ['$event'])
  async doSomething(event) {
    this.scrollPos = window.pageYOffset;
    const button = document.getElementsByClassName('btn-circle') as HTMLCollectionOf<HTMLElement>;
    if (this.scrollPos > 250) {
      button[0].style.right = '5%';
    } else {
      button[0].style.right = '-50%';
    }
  }

  @HostListener('contextmenu', ['$event'])
  onRightClick(event) {
    event.preventDefault();
  }
}

import { Component, HostListener, OnInit } from '@angular/core';
import { UserlogService } from './services/userlog.service';
import { Router } from '@angular/router';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Mi biblioteca';
  darkTheme: boolean;
  scrollPos: number;
  user: any = null;

  constructor(public userLogService: UserlogService, private router: Router, private themeService: ThemeService) {
  }

  ngOnInit() {
    this.themeService.isDarkTheme.subscribe(dark => this.darkTheme = dark);
    this.themeService.setDarkTheme(this.themeService.loadDarkTheme());
    this.scrollPos = window.pageYOffset;
    this.scrollUp();
    this.loadUser();
  }

  loadUser(): void {
    if (localStorage.getItem('usuario_activo') != null && localStorage.getItem('id_activo') != null) {
      this.userLogService.userLog = localStorage.getItem('usuario_activo');
      this.userLogService.userID = localStorage.getItem('id_activo');
      this.user = this.userLogService.userLog;
    } else {
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

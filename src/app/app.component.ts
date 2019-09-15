import { Component, HostListener } from '@angular/core';
import { UserlogService } from './services/userlog.service';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';
import { DarkModeService } from './services/dark-mode.service';
import { Button } from 'protractor';
import { delay } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
    window.scroll(0, 0);
    this.scrollPos = window.pageYOffset;
    if (localStorage.getItem('usuario_activo') != null && localStorage.getItem('id_activo')) {
      this.userLog.userLog = localStorage.getItem('usuario_activo');
      this.userLog.userID = localStorage.getItem('id_activo');
    }
    else if (this.userLog.userLog === '') {
      this.router.navigate(['/login']);
    }
  }

  scrollUp(){
    window.scrollTo({top:0, behavior:'smooth'});
  }

  @HostListener('window:scroll', ['$event']) 
  doSomething(event) {
    this.scrollPos = window.pageYOffset;
    let button = document.getElementsByClassName('btn-circle') as HTMLCollectionOf<HTMLElement>;
    if(this.scrollPos > 250){
      button[0].style.right = '5%';
    } else {
      button[0].style.right = '-50%';
    }
  }
}

import { Component, OnInit, HostListener } from '@angular/core';
import { UserlogService } from 'src/app/services/userlog.service';
import { Router } from '@angular/router';
import { DarkModeService } from 'src/app/services/dark-mode.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  innerWidth: number = 0;
  scrollPos: number = 0;
  darkMode:boolean;
  check:boolean;
  body = document.getElementsByTagName('body') as HTMLCollectionOf<HTMLElement>;
  
  constructor(private user: UserlogService, private router: Router, private dark: DarkModeService) { }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.dark.darkMode.subscribe( dark => this.darkMode = dark );
    this.check = this.darkMode;
    if (this.darkMode) {
      this.body[0].style.backgroundColor = "#2e2e2e";
    } else {
      this.body[0].style.backgroundColor = "#fff";
    }
  }

  checkDarkMode(check:any) {
    this.dark.setDarkModeValue(check);
    if (this.darkMode) {
      this.body[0].style.backgroundColor = "#2e2e2e";
    } else {
      this.body[0].style.backgroundColor = "#fff";
    }
  }

  @HostListener('window:scroll', ['$event']) 
  doSomething(event) {
    this.scrollPos = window.pageYOffset;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event){
    this.innerWidth = window.innerWidth;
  }

  salirCuenta() {
    this.user.forgetUser();
    this.router.navigate(['/login']);
  }
}

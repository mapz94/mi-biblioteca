import { Component, OnInit, HostListener } from '@angular/core';
import { UserlogService } from 'src/app/services/userlog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  innerWidth: number = 0;
  scrollPos: number = 0;
  
  constructor(private user: UserlogService, private router: Router) { }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
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

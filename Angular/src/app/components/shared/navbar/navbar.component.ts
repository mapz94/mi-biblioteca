import { Component, OnInit, HostListener } from '@angular/core';
import { UserlogService } from 'src/app/services/userlog.service';
import { Router, RouterLinkActive } from '@angular/router';
import { DarkModeService } from 'src/app/services/dark-mode.service';
import { UserService } from 'src/app/services/user.service';
<<<<<<< HEAD:Angular/src/app/components/shared/navbar/navbar.component.ts
import { User } from 'src/app/class/User';
=======
>>>>>>> f4cd18d27b70f8520b05f9030e1f10c728af9f13:src/app/components/shared/navbar/navbar.component.ts

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  innerWidth = 0;
  scrollPos = 0;
  darkMode: boolean;
  check: boolean;
  body = document.getElementsByTagName('body') as HTMLCollectionOf<HTMLElement>;
<<<<<<< HEAD:Angular/src/app/components/shared/navbar/navbar.component.ts
  userData: User = new User();

  constructor(private userLog: UserlogService, private router: Router, private dark: DarkModeService, private userService: UserService) { }
=======
  userData:any= [];
  
  constructor(private userLog: UserlogService, private router: Router, private dark: DarkModeService, private user: UserService) { }
>>>>>>> f4cd18d27b70f8520b05f9030e1f10c728af9f13:src/app/components/shared/navbar/navbar.component.ts

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.dark.darkMode.subscribe( dark => this.darkMode = dark );
    this.check = this.darkMode;
    if (this.darkMode) {
      this.body[0].style.backgroundColor = '#2e2e2e';
    } else {
      this.body[0].style.backgroundColor = '#fff';
    }
<<<<<<< HEAD:Angular/src/app/components/shared/navbar/navbar.component.ts
    this.userService.getUserById(this.userLog.userID).subscribe(user => this.userData = user);
    this.userService.notificarUpload.subscribe(user => {
      this.userData = user;
    });
=======
    this.userData = this.user.getUser(this.userLog.userID);
>>>>>>> f4cd18d27b70f8520b05f9030e1f10c728af9f13:src/app/components/shared/navbar/navbar.component.ts
  }

  checkDarkMode(check: any) {
    this.dark.setDarkModeValue(check);
    if (this.darkMode) {
      this.body[0].style.backgroundColor = '#2e2e2e';
    } else {
      this.body[0].style.backgroundColor = '#fff';
    }
  }

  @HostListener('window:scroll', ['$event'])
  doSomething(event) {
    this.scrollPos = window.pageYOffset;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

  salirCuenta() {
    this.userLog.forgetUser();
    this.router.navigate(['/login']);
  }
}

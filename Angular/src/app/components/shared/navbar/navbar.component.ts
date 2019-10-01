import { HttpService } from 'src/app/services/http.service';
import { Component, OnInit, HostListener } from '@angular/core';
import { UserlogService } from 'src/app/services/userlog.service';
import { Router, RouterLinkActive } from '@angular/router';
import { User } from 'src/app/class/User';
import { ThemeService } from 'src/app/services/theme.service';

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
  userData: User = new User();

  private urlUsers = 'http://localhost:8080/biblio/users';

  constructor(private userLog: UserlogService, private router: Router, 
              private themeService: ThemeService, private httpService: HttpService) { }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.themeService.isDarkTheme.subscribe( dark => this.darkMode = dark );
    this.themeService.setDarkTheme(this.themeService.loadDarkTheme());
    this.check = this.darkMode;
    console.log( this.userLog.userID)
    if( this.userLog.userID != null) {
      this.httpService.getById(this.urlUsers,this.userLog.userID).subscribe(user => this.userData = user);
      this.httpService.notificarUpload.subscribe(user => {
        this.userData = user;
      });
    }
  }

  checkDarkMode(check: any) {
    this.themeService.setDarkTheme(check);
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

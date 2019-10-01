import { Component, OnInit, ViewEncapsulation, Input, HostListener } from '@angular/core';
import { UserlogService } from 'src/app/services/userlog.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/class/User';
import { ThemeService } from 'src/app/services/theme.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  private subs: Subscription;
  user: User = new User();
  darkMode: boolean;
  collapseOne: boolean;
  collapseTwo: boolean;
  innerWidth: number;
  private urlUsers = 'http://localhost:8080/biblio/users';

  constructor(private userLog: UserlogService, private router: Router,
              private themeService: ThemeService, private httpService: HttpService) {

  }

  ngOnInit() {

    this.themeService.isDarkTheme.subscribe(dark => this.darkMode = dark);
    this.themeService.loadDarkTheme();
    this.httpService.getById(this.urlUsers, this.userLog.userID).subscribe(val => this.user = val);
    this.innerWidth = window.innerWidth;

    if (localStorage.getItem('usuario_activo') != null && localStorage.getItem('id_activo') != null) {
      this.userLog.userLog = localStorage.getItem('usuario_activo');
      this.userLog.userID = localStorage.getItem('id_activo');
    }
    if (this.userLog.userLog === '') {
      this.router.navigate(['/login']);
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }


}

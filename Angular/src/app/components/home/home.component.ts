import { Component, OnInit, ViewEncapsulation, Input, HostListener } from '@angular/core';
import * as user from '../../global';
import { UserlogService } from 'src/app/services/userlog.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { DarkModeService } from 'src/app/services/dark-mode.service';
import { Subscription } from 'rxjs';
import { delay } from 'q';
import { User } from 'src/app/class/User';

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

  constructor(private userLog: UserlogService, private router: Router, private dark: DarkModeService, private userService: UserService) {

  }

  ngOnInit() {

    this.dark.darkMode.subscribe(dark => this.darkMode = dark);
    this.userService.getUserById(this.userLog.userID).subscribe(val => this.user = val);
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

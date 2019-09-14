import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import * as user from '../../global';
import { UserlogService } from 'src/app/services/userlog.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { DarkModeService } from 'src/app/services/dark-mode.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  private subs: Subscription;
  lPrestados = false;
  lSolicita = false;
  username = ''; 
  darkMode:boolean;

  constructor(private userLog: UserlogService, private router: Router, private user: UserService, private dark: DarkModeService) { 

    }

  ngOnInit() {

    this.dark.darkMode.subscribe( dark => this.darkMode = dark);

    if(localStorage.getItem('usuario_activo') != null && localStorage.getItem('id_activo')){
      this.userLog.userLog = localStorage.getItem('usuario_activo');
      this.userLog.userID = localStorage.getItem('id_activo');
    }
    else if(this.userLog.userLog === '')
    {
      this.router.navigate(['/login']);
    }
    this.username = this.userLog.userLog.toLocaleUpperCase();
  }

  

}

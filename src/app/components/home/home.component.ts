import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as user from '../../global';
import { UserlogService } from 'src/app/services/userlog.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  lPrestados = false;
  lSolicita = false;
  username = ''; 


  constructor(private userLog: UserlogService, private router: Router, private user: UserService) { 
  }

  ngOnInit() {
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

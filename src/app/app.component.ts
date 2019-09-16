import { Component } from '@angular/core';
import { UserlogService } from './services/userlog.service';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'biblioteca';

  constructor(private userLog: UserlogService, private router: Router, private user: UserService) { 
  }

  ngOnInit() {
    window.scroll(0,0);
    if(localStorage.getItem('usuario_activo') != null && localStorage.getItem('id_activo')){
      this.userLog.userLog = localStorage.getItem('usuario_activo');
      this.userLog.userID = localStorage.getItem('id_activo');
    }
    else if(this.userLog.userLog === '')
    {
      this.router.navigate(['/login']);
    }
  }
}

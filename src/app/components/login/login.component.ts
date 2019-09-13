import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { UserlogService } from 'src/app/services/userlog.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  username:string = '';
  password:string = '';
  errorLogin:boolean = false;
  remember:boolean;
  id:any;


  constructor(private router: Router, private userLog: UserlogService, private user: UserService) {
    
  }

  ngOnInit() {
  }

  checkCheckBoxvalue(check:any) {
    this.remember = check;
  }

  validarLogin() {
    this.id = this.user.validarUser(this.username, this.password);
    if(this.id != null) {
      if(this.remember) {
        this.userLog.rememberUser(this.user.getUserRealName(this.id), this.id);
      } else{
        this.userLog.userLog = this.user.getUserRealName(this.id);
      }
      this.userLog.userID = this.id;
      this.router.navigate(['/home']);
    } else {
      this.errorLogin = true;
    }
  }

}

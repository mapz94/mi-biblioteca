import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { UserlogService } from 'src/app/services/userlog.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  userData:any= [];

  constructor(private user:UserService, private userLog: UserlogService) { }

  ngOnInit() {
    this.userData = this.user.getUser(this.userLog.userID);
    console.log(this.userData);
  }

}

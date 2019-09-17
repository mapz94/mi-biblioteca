import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { UserlogService } from 'src/app/services/userlog.service';
import { DarkModeService } from 'src/app/services/dark-mode.service';
import { User } from 'src/app/class/User';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  userData: User[] = [];

  constructor(private user: UserService, private userLog: UserlogService, private dark: DarkModeService) { }

  darkMode: boolean;

  ngOnInit() {
    this.dark.darkMode.subscribe(dark => this.darkMode = dark);
    this.user.getUserById(this.userLog.userID).subscribe(user => this.userData = user);
  }

}

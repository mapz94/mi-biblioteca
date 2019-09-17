import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { DarkModeService } from 'src/app/services/dark-mode.service';
import { User } from 'src/app/class/User';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  confPass: boolean;
  users: User[] = [];
  user: User = new User();
  passInvalid = false;
  userInvalid = false;
  termins = false;
  terminsError = false;
  empty: number;
  darkMode: boolean;

  constructor(private userService: UserService, private router: Router, private dark: DarkModeService) { }

  ngOnInit() {
    this.dark.darkMode.subscribe(dark => this.darkMode = dark);
    this.userService.getUsers().subscribe(user => this.users = user);
  }

  checkCheckBoxvalue(check: any) {
    this.termins = check;
  }

  getUsername(username: string): boolean {
    for (const i of this.users) {
      if (i.username === this.user.username) {
        return false;
      }
    }
    return true;
  }

  registerUser(): void {
    this.userService.create(this.user).subscribe(
      response => {
        this.router.navigate(['/login']);
        Swal.fire({position: 'top', title: 'Registro',
                   text: `Tu usuario: "${this.user.nombre}" ha sido creado con exito!`, type: 'success'});
      });
  }
}

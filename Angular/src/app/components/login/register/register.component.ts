import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/class/User';
import Swal from 'sweetalert2';
import { ThemeService } from 'src/app/services/theme.service';
import { HttpService } from 'src/app/services/http.service';
import { FormsModule } from '@angular/forms';

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
  check: boolean;
  darkMode: boolean;
  private urlUsers = 'http://localhost:8080/biblio/users';

  constructor(private httpService: HttpService, private router: Router, private themeService: ThemeService) { }

  ngOnInit() {
    this.themeService.isDarkTheme.subscribe(dark => this.darkMode = dark);
    this.httpService.getAll(this.urlUsers).subscribe(user => this.users = user);
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
    if (this.termins) {
      this.httpService.create(this.urlUsers, this.user).subscribe(
        response => {
          this.router.navigate(['/login']);
          Swal.fire({position: 'top-end', title: 'Registro',
                     text: `Tu usuario: "${this.user.nombre}" ha sido creado con exito!`, type: 'success'});
        });
    } else {
      this.terminsError = true;
    }
  }
}

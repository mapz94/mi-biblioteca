import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { UserlogService } from 'src/app/services/userlog.service';
import { DarkModeService } from 'src/app/services/dark-mode.service';
import { User } from 'src/app/class/User';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  user: User = new User();

  constructor(private userService: UserService, private userLog: UserlogService,
              private dark: DarkModeService, private activatedRoute: ActivatedRoute,
              private router: Router) { }

  darkMode: boolean;

  ngOnInit() {
    this.dark.darkMode.subscribe(dark => this.darkMode = dark);
    this.loadUser();
  }

  public loadUser(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params.id;
      if (id) {
        this.userService.getUserById(id).subscribe(val => this.user = val);
      }
    });
  }

  public updateUser(): void {
    this.userService.update(this.user).subscribe(
      response => {
        this.router.navigate(['/home']);
        Swal.fire({position: 'top', title: 'Datos de usuario',
                   text: `Tu usuario: "${this.user.nombre}" ha sido actualizado con exito!`, type: 'success'});
      }
    );
  }

}

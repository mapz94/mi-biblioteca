import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { UserlogService } from 'src/app/services/userlog.service';
import { DarkModeService } from 'src/app/services/dark-mode.service';
import { User } from 'src/app/class/User';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  user: User;
  private fotoSeleccionada: File;
  public progreso = 0;
  selImage = 'Elegir imagen';

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
        this.userService.getUserById(id).subscribe(user => this.user = user);
      }
    });
    this.userService.notificarUpload.subscribe(user => {
      this.user = user;
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

  seleccionarFoto(event) {
    this.fotoSeleccionada = event.target.files[0];
    this.progreso = 0;
    if (this.fotoSeleccionada.type.indexOf('image') < 0 ) {
      Swal.fire({title: 'Error', text: `Debe seleccionar una imagen valida de formato por ejemplo: JPG, PNG.`, type: 'error'});
      return null;
    }
    this.selImage = this.fotoSeleccionada.name;
  }

  subirFoto() {
    if (this.fotoSeleccionada) {
      this.userService.subirFoto(this.fotoSeleccionada, this.user.id)
      .subscribe( event => {
        if ( event.type === HttpEventType.UploadProgress ) {
          this.progreso = Math.round((event.loaded / event.total) * 100);
        } else if ( event.type === HttpEventType.Response ) {
          const response: any = event.body;
          this.user = response.user as User;
          this.userService.notificarUpload.emit(this.user);
          Swal.fire({title: 'Subir foto', text: `La foto ha sido subida con exito!`, type: 'success'});
          this.fotoSeleccionada = null;
        }
      });
    } else {
      Swal.fire({title: 'Error', text: `Debe seleccionar la imagen que desea subir.`, type: 'error'});
    }
  }

}

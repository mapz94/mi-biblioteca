import { HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/class/User';
import { HttpService } from 'src/app/services/http.service';
import { ThemeService } from 'src/app/services/theme.service';
import { UserlogService } from 'src/app/services/userlog.service';
import Swal from 'sweetalert2';

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

  constructor(private httpService: HttpService, private userLog: UserlogService,
    private themeService: ThemeService, private activatedRoute: ActivatedRoute,
    private router: Router) { }

  darkMode: boolean;
  private urlUsers = 'http://localhost:8080/biblio/users';

  ngOnInit() {
    this.themeService.isDarkTheme.subscribe(dark => this.darkMode = dark);
    this.themeService.setDarkTheme(this.themeService.loadDarkTheme());
    this.loadUser();
  }

  public loadUser(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params.id;
      if (id) {
        this.httpService.getById(this.urlUsers, this.userLog.userID).subscribe(val => this.user = val);
      }
    });
    this.httpService.notificarUpload.subscribe(user => {
      this.user = user;
    });
  }

  public updateUser(): void {
    this.httpService.update(this.urlUsers, this.user.id, this.user).subscribe(
      response => {
        this.router.navigate(['/home']);
        Swal.fire({
          position: 'top-end', title: 'Datos de usuario',
          text: `Tu usuario: "${this.user.nombre}" ha sido actualizado con exito!`, type: 'success'
        });
      }
    );
  }

  seleccionarFoto(event) {
    this.fotoSeleccionada = event.target.files[0];
    this.progreso = 0;
    if (this.fotoSeleccionada.type.indexOf('image') < 0) {
      this.fotoSeleccionada = null;
      Swal.fire({ title: 'Error', text: `Debe seleccionar una imagen valida de formato por ejemplo: JPG, PNG.`, type: 'error', position: 'top-end' });
      return null;
    }
    this.selImage = this.fotoSeleccionada.name;
  }

  subirFoto() {
    if (this.fotoSeleccionada) {
      this.httpService.photoUpload(this.urlUsers, this.fotoSeleccionada, this.user.id)
        .subscribe(event => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progreso = Math.round((event.loaded / event.total) * 100);
          } else if (event.type === HttpEventType.Response) {
            const response: any = event.body;
            this.user = response.user as User;
            this.httpService.notificarUpload.emit(this.user);
            Swal.fire({ title: 'Subir foto', text: `La foto ha sido subida con exito!`, type: 'success', position: 'top-end' });
            this.fotoSeleccionada = null;
            this.selImage = 'Elegir imagen';
          }
        });
    } else {
      Swal.fire({ title: 'Error', text: `Debe seleccionar la imagen que desea subir.`, type: 'error', position: 'top-end' });
    }
  }

}

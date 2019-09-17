import { Injectable } from '@angular/core';
import { UserlogService } from './userlog.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../class/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  protected user: User[] = [
    {
      id: 0,
      username: 'shaderkill',
      nombre: 'Cristian',
      apellidoPaterno: 'Molina',
      apellidoMaterno: 'Seguel',
      email: 'c.molina38@alumnos.santotomas.cl',
      password: 'admin',
      rut: '19378388-0',
      imgAvatar: '../../../assets/img/Avatar/shaderkillAvatar.jpg'
    },
    {
      id: 1,
      username: 'miguel',
      nombre: 'Miguel',
      apellidoPaterno: 'Perez',
      apellidoMaterno: 'pendiente',
      email: 'correo@alumnos.santotomas.cl',
      password: 'admin',
      rut: '1-9',
      imgAvatar: '../../../assets/img/Avatar/defaultAvatar.jpg'
    }
  ];

  private urlUsers = 'http://localhost:8080/users';

  constructor(private userLog: UserlogService, private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>(this.urlUsers);
  }

  getUserById(id: string) {
    return this.http.get<User[]>(this.urlUsers + '/' + id);
  }

  registerUser(user: string, name: string, apePat: string, apeMat: string, email: string, password: string, rut: string) {
    return null;
  }
}



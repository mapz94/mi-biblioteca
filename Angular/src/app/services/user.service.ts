import { Injectable } from '@angular/core';
import { UserlogService } from './userlog.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../class/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urlUsers = 'http://localhost:8080/biblio/users';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>(this.urlUsers);
  }

  getUserById(id: string) {
    return this.http.get<User[]>(this.urlUsers + '/' + id);
  }

  registerUser(user: string, name: string, apePat: string, apeMat: string, email: string, password: string, rut: string) {
    console.log('Registro deshabilitado.');
    return null;
  }
}



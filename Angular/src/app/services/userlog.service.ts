import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserlogService {
  userLog: string = null;
  userID: string = null;

  constructor() { }

  rememberUser(user: string, id: string) {
    this.userLog = user;
    this.userID = id;
    localStorage.setItem('usuario_activo', this.userLog);
    localStorage.setItem('id_activo', this.userID);
  }

  forgetUser() {
    this.userLog = null;
    this.userID = null;
    localStorage.removeItem('usuario_activo');
    localStorage.removeItem('id_activo');
  }
}

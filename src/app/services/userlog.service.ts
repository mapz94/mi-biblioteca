import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserlogService {
  userLog: string = '';
  userID: string = '';

  constructor() { }

  rememberUser(user:string, id:string) {
    this.userLog = user;
    this.userID = id;
    localStorage.setItem("usuario_activo",this.userLog);
    localStorage.setItem("id_activo", this.userID);
  }

  forgetUser(){
    this.userLog = '';
    this.userID = '';
    localStorage.removeItem('usuario_activo');
    localStorage.removeItem('id_activo');
  }
}

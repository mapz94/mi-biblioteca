import { Injectable } from '@angular/core';
import { UserlogService } from './userlog.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  protected user:User[] = [
    {
      id: 0,
      username:'shaderkill',
      nombre:'Cristian',
      apellidoPaterno:'Molina',
      apellidoMaterno:'Seguel',
      email:'c.molina38@alumnos.santotomas.cl',
      contraseña:'admin',
      rut:'19378388-0',
      imgAvatar: '../../../assets/img/Avatar/shaderkillAvatar.jpg'
    },
    {
      id: 1,
      username:'miguel',
      nombre:'Miguel',
      apellidoPaterno:'Perez',
      apellidoMaterno:'pendiente',
      email:'correo@alumnos.santotomas.cl',
      contraseña:'admin',
      rut:'1-9',
      imgAvatar: '../../../assets/img/Avatar/defaultAvatar.jpg'
    }
  ]

  constructor(private userLog:UserlogService) { }

  getUserRealName( id: string ) {
    let usuario = this.user[id];
    let nombre = usuario.nombre;
    return nombre;
  }

  getUser( id: string ){
    return this.user[id];
  }

  validarUser( userText:string, passText:string ){
    let userArr:User[] = [];
    userText = userText.toLowerCase();
    passText = passText.toLowerCase();

    for( let i = 0; i < this.user.length; i ++){
  
      let texto = this.user[i];
  
      let username = texto.username.toLowerCase();
      let pass = texto.contraseña.toLowerCase();
      if ( username === userText && pass === passText ) {
        return i;
      }
    }
    return null;
  }

  getUsername( userText:string){

    let userArr:User[] = [];
    userText = userText.toLowerCase();
  
    for( let i = 0; i < this.user.length; i ++){
  
      let texto = this.user[i];
  
      let username = texto.username.toLowerCase();
      if ( username === userText) {
        return true;
      }
    }  
  }

  registerUser( user:string, name:string, apePat:string, apeMat:string, email:string, password:string, rut:string){
    let idx = this.user.length;
    var newUser: User = {id:idx,username:user,nombre:name,apellidoPaterno:apePat,apellidoMaterno:apeMat, email:email, contraseña:password, rut:rut, imgAvatar:'../../../assets/img/Avatar/defaultAvatar.jpg' };
    this.user.push(newUser);
    return console.log('Usuario creado con exito.');
  }
}

export interface User{
  id:number;
  username:string;
  nombre:string;
  apellidoPaterno:string;
  apellidoMaterno:string;
  email:string;
  contraseña:string;
  rut:string;
  imgAvatar:string;
} 

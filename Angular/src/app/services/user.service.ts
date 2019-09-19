import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../class/User';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urlUsers = 'http://localhost:8080/biblio/users';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient, private router: Router) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.urlUsers).pipe(
      map(response => response as User[])
    );
  }

  getUserById(id: string): Observable<any> {
    return this.http.get<any>(`${this.urlUsers}/${id}`).pipe(
      catchError( e => {
        console.error(e.error.mensaje);
        Swal.fire({title: 'Error al acceder al cliente', text: e.error.mensaje, type: 'error'});
        this.router.navigate(['/home']);
        return throwError(e);
      })
    );
  }

  create(user: User): Observable <any> {
    return this.http.post<any>(this.urlUsers, user, {headers: this.httpHeaders}).pipe(
      map(response => response.user as User),
      catchError( e => {
        console.error(e.error.mensaje);
        Swal.fire({title: e.error.mensaje, text: e.error.error, type: 'error'});
        return throwError(e);
      }));
  }

  update(user: User): Observable<any> {
    return this.http.put<any>(`${this.urlUsers}/${user.id}`, user, {headers: this.httpHeaders}).pipe(
      map(response => response.user as User),
      catchError( e => {
        console.error(e.error.mensaje);
        Swal.fire({title: e.error.mensaje, text: e.error.error, type: 'error'});
        return throwError(e);
      })
    );
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.urlUsers}/${id}`, {headers: this.httpHeaders}).pipe(
      catchError( e => {
        console.error(e.error.mensaje);
        Swal.fire({title: e.error.mensaje, text: e.error.error, type: 'error'});
        return throwError(e);
      })
    );
  }
}



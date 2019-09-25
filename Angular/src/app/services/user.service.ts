import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent, HttpRequest } from '@angular/common/http';
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
  private NotificarUpload = new EventEmitter<any>();

  constructor(private http: HttpClient, private router: Router) { }

  get notificarUpload(): EventEmitter<any> {
    return this.NotificarUpload;
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.urlUsers).pipe(
      map(response => response as User[])
    );
  }

  getUserById(id: string): Observable<any> {
    if (id === '0') {
      return;
    }
    return this.http.get<any>(`${this.urlUsers}/${id}`).pipe(
      catchError( e => {
        console.error(e.error.mensaje);
        Swal.fire({title: 'Error al acceder al cliente', text: e.error.mensaje, type: 'error', position: 'top-end'});
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
        Swal.fire({title: e.error.mensaje, text: e.error.error, type: 'error', position: 'top-end'});
        return throwError(e);
      }));
  }

  update(user: User): Observable<any> {
    return this.http.put<any>(`${this.urlUsers}/${user.id}`, user, {headers: this.httpHeaders}).pipe(
      map(response => response.user as User),
      catchError( e => {
        console.error(e.error.mensaje);
        Swal.fire({title: e.error.mensaje, text: e.error.error, type: 'error', position: 'top-end'});
        return throwError(e);
      })
    );
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.urlUsers}/${id}`, {headers: this.httpHeaders}).pipe(
      catchError( e => {
        console.error(e.error.mensaje);
        Swal.fire({title: e.error.mensaje, text: e.error.error, type: 'error', position: 'top-end'});
        return throwError(e);
      })
    );
  }

  subirFoto(archivo: File, id): Observable<HttpEvent<{}>> {
    const formData = new FormData();
    formData.append('archivo', archivo);
    formData.append('id', id);
    const req = new HttpRequest('POST', `${this.urlUsers}/upload/`, formData, {
      reportProgress: true
    });
    return this.http.request(req);
  }
}



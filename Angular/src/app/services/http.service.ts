import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  private NotificarUpload = new EventEmitter<any>();

  constructor(private http: HttpClient, private router: Router) { }

  get notificarUpload(): EventEmitter<any> {
    return this.NotificarUpload;
  }

  getAll(url: string): Observable<any[]> {
    return this.http.get<any[]>(url).pipe(
      map(response => response as any[])
    );
  }

  getById(url: string, id: string): Observable<any> {
    if (id === '0') {
      return;
    }
    return this.http.get<any>(`${url}/${id}`).pipe(
      catchError(e => {
        console.error(e.error.mensaje);
        Swal.fire({ title: 'Error al acceder al cliente', text: e.error.mensaje, type: 'error' });
        this.router.navigate(['/home']);
        return throwError(e);
      })
    );
  }

  create(url: string, object: any): Observable<any> {
    return this.http.post<any>(url, object, { headers: this.httpHeaders }).pipe(
      map(response => response.user as any),
      catchError(e => {
        console.error(e.error.mensaje);
        Swal.fire({ title: e.error.mensaje, text: e.error.error, type: 'error' });
        return throwError(e);
      }));
  }

  update(url: string, id: number, object: any): Observable<any> {
    return this.http.put<any>(`${url}/${id}`, object, { headers: this.httpHeaders }).pipe(
      map(response => response.user as any),
      catchError(e => {
        console.error(e.error.mensaje);
        Swal.fire({ title: e.error.mensaje, text: e.error.error, type: 'error' });
        return throwError(e);
      })
    );
  }

  delete(url: string, id: number): Observable<any> {
    return this.http.delete<any>(`${url}/${id}`, { headers: this.httpHeaders }).pipe(
      catchError(e => {
        console.error(e.error.mensaje);
        Swal.fire({ title: e.error.mensaje, text: e.error.error, type: 'error' });
        return throwError(e);
      })
    );
  }

  photoUpload(url: string, archivo: File, id: any): Observable<HttpEvent<{}>> {
    const formData = new FormData();
    formData.append('archivo', archivo);
    formData.append('id', id);
    const req = new HttpRequest('POST', `${url}/upload/`, formData, {
      reportProgress: true
    });
    return this.http.request(req);
  }
}



import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../class/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urlUsers = 'http://localhost:8080/biblio/users';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.urlUsers);
  }

  getUserById(id: string): Observable<User> {
    return this.http.get<User>(`${this.urlUsers}/${id}`);
  }

  create(user: User): Observable <User> {
    return this.http.post<User>(this.urlUsers, user, {headers: this.httpHeaders});
  }

  update(user: User): Observable<User> {
    return this.http.put<User>(`${this.urlUsers}/${user.id}`, user, {headers: this.httpHeaders});
  }
}



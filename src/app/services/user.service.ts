import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SigleDatResponse, UsersResponse } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<UsersResponse>{
    return this.http.get<UsersResponse>(`${environment.apiUrl}/users`);
  }

  getSigleUser(id: number): Observable<SigleDatResponse>{
    return this.http.get<SigleDatResponse>(`${environment.apiUrl}/users/${id}`);
  }


}

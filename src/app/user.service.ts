import { Injectable } from '@angular/core';
import { User } from './interfaces/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { error } from 'console';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user!: User;
  jwtToken = "";

  constructor(private http: HttpClient) {}
    
  userLogin(userName: string, password: string) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');

    const userLoginCreds = {
      "username":  userName,
      "password": password
    }

    this.http.post<any>(`http://localhost:5000/api/v1/login`, userLoginCreds, {headers}).subscribe(data => {
      this.jwtToken = data;
    })

    return this.jwtToken;
  }
}

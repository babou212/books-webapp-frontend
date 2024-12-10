import { EventEmitter, Injectable } from '@angular/core';
import { User } from './interfaces/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user!: User;
  userEmit = new EventEmitter<any>();

  constructor(private http: HttpClient) {}
    
  userLogin(userName: string, password: string) {
    const httpHeaders: HttpHeaders = new HttpHeaders({
      "Content-Type": "application/json"
    });

    const userLoginCreds = {
      "username":  userName,
      "password": password
    }

    this.http.post<string>(`http://localhost:5000/api/v1/login`, userLoginCreds, { headers: httpHeaders }).subscribe(data => {
      localStorage.setItem("jwt_token", data);
    })

    if (localStorage.getItem("jwt_token")) {
      this.getUser();
    }
  }

  getUser() {
    const jwt_token: any = localStorage.getItem("jwt_token")
    const httpHeaders: HttpHeaders = new HttpHeaders({
      "x-access-token": jwt_token
    });

    this.http.get<User>(`http://localhost:5000/api/v1/user`, { headers: httpHeaders }).subscribe(data => {
      this.user = data;
      this.userEmit.emit();
    })

    return this.user;
  }

  getToken() {
    return localStorage.getItem("jwt_token");
  }

}

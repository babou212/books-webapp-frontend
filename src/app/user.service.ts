import { Injectable } from '@angular/core';
import { User } from './interfaces/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user!: User;
  jwtToken = "";

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
      this.jwtToken = data;
    })

    if (this.jwtToken) {
      this.setUser();
    }
  }

  setUser() {
    const httpHeaders: HttpHeaders = new HttpHeaders({
      "x-access-token": this.jwtToken
    });

    this.http.get<User>(`http://localhost:5000/api/v1/user`, { headers: httpHeaders }).subscribe(data => {
      this.user = data;
    })
  }

}

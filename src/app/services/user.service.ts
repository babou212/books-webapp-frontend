import { User } from './../interfaces/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Book } from '../interfaces/book';


const emptyUser = {
  "_id" : "",
  "username" : "",
  "password" : "",
  "role" : "",
  "amountOwed": 0,
  "books" : []
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userSubject$ = new BehaviorSubject<User>(emptyUser);

  getUser(): Observable<User> {
    return this.userSubject$;
  }

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

      if (localStorage.getItem("jwt_token")) {
        this.getUserFromJwt();
      }
    })
  }

  userRegistration(userName: string, password: string) {
    const httpHeaders: HttpHeaders = new HttpHeaders({
      "Content-Type": "application/json"
    });

    const user = {
      "username":  userName,
      "password": password
    }

    this.http.post<string>(`http://localhost:5000/api/v1/users`, user, { headers: httpHeaders }).subscribe(data => {
      localStorage.setItem("jwt_token", data);
    })

    if (localStorage.getItem("jwt_token")) {
      this.getUserFromJwt();
    }
  }

  userLogout() {
    const jwt_token: any = localStorage.getItem("jwt_token")
    const httpHeaders: HttpHeaders = new HttpHeaders({
      "x-access-token": jwt_token
    });

    const emptyUser = {
        "_id" : "",
        "username" : "",
        "password" : "",
        "role" : "",
        "amountOwed": 0,
        "books" : []
    }

    this.http.get<string>(`http://localhost:5000/api/v1//logout`, { headers: httpHeaders }).subscribe(data => {
      localStorage.clear();
      this.userSubject$.next(emptyUser);
    })
  }

  getUserFromJwt() {
    const jwt_token: any = localStorage.getItem("jwt_token")
    const httpHeaders: HttpHeaders = new HttpHeaders({
      "x-access-token": jwt_token
    });

    this.http.get<User>(`http://localhost:5000/api/v1/user`, { headers: httpHeaders }).subscribe(data => {
      this.userSubject$.next(data);
    })
  }

  reserveBook(_id: string) {
    const jwt_token: any = localStorage.getItem("jwt_token")
    const httpHeaders: HttpHeaders = new HttpHeaders({
      "x-access-token": jwt_token
    });

    this.http.put(`http://127.0.0.1:5000/api/v1/users/reserve/${_id}`, {}, { headers: httpHeaders }).subscribe(data => {
    })
  }

  unreserveUserBook(_id: string) {
    const jwt_token: any = localStorage.getItem("jwt_token")
    const httpHeaders: HttpHeaders = new HttpHeaders({
      "x-access-token": jwt_token
    });

    this.http.delete<any>(`http://127.0.0.1:5000/api/v1/users/reserve/${_id}`, { headers: httpHeaders }).subscribe(data => {
    })
  }
}

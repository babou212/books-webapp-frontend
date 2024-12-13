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

  /**
  * The constructor for the user service
  * @param http Injecting the HttpClient to the BookService
  * class
  */
    constructor(private http: HttpClient) {}

  /**
  * getter for returning new user values
  * @returns Observable<User[]>
  */
  getUser(): Observable<User> {
    return this.userSubject$;
  }

  /**
  * returns jwt token
  * @returns any
  * class
  */
  userLogin(userName: string, password: string): any {
    let dataToReturn = "";

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

      dataToReturn = data;
    })
  }

  /**
  * Creates new user
  * @param userName
  * @param password
  * @returns none
  * class
  */
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

  /**
  * logs user out
  * @returns none
  * class
  */
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

  /**
  * sets user from jwt token
  * @returns none
  * class
  */
  getUserFromJwt() {
    const jwt_token: any = localStorage.getItem("jwt_token")
    const httpHeaders: HttpHeaders = new HttpHeaders({
      "x-access-token": jwt_token
    });

    this.http.get<User>(`http://localhost:5000/api/v1/user`, { headers: httpHeaders }).subscribe(data => {
      this.userSubject$.next(data);
    })
  }

  /**
  * reserves book for user
  * @param _id
  * @returns none
  * class
  */
  reserveBook(_id: string) {
    const jwt_token: any = localStorage.getItem("jwt_token")
    const httpHeaders: HttpHeaders = new HttpHeaders({
      "x-access-token": jwt_token
    });

    this.http.put(`http://127.0.0.1:5000/api/v1/users/reserve/${_id}`, {}, { headers: httpHeaders }).subscribe(data => {
    })
  }

  /**
  * un-reserves book for user
  * @param _id
  * @returns none
  * class
  */
  unreserveUserBook(_id: string) {
    const jwt_token: any = localStorage.getItem("jwt_token")
    const httpHeaders: HttpHeaders = new HttpHeaders({
      "x-access-token": jwt_token
    });

    this.http.delete<any>(`http://127.0.0.1:5000/api/v1/users/reserve/${_id}`, { headers: httpHeaders }).subscribe(data => {
    })
  }
}

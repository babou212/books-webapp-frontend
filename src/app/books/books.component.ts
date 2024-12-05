import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

    @Component({
    selector: 'books',
    standalone: true,
    imports: [MatCardModule],
    templateUrl: './books.component.html',
    styleUrl: './books.component.scss'
    })

@Injectable({providedIn: 'root'})
export class BooksComponent {
    books: any[] = [];

    constructor(private http: HttpClient) {
        http.get<any>("http://127.0.0.1:5000//api/v1/books").subscribe(data => {
            this.books = data;
        })    
    }
 }

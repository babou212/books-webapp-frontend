import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

interface Book {
    _id: Object;
    title: String;
    isbn: Number;
    pageCount: Number;
    publishedDate: Date;
    thumbnailUrl: String;
    description: String;
    reserved: Boolean;
    price: Number;
    authors: String[];
    categories: String[];
 }

    @Component({
    selector: 'books',
    standalone: true,
    imports: [MatCardModule, MatPaginatorModule],
    templateUrl: './books.component.html',
    styleUrl: './books.component.scss'
    })

@Injectable({providedIn: 'root'})
export class BooksComponent {
    books: Book[] = [];
    totalLength = 0;
    pageSize = 8;
    currentPage = 0;

    handlePageEvent(pageEvent: PageEvent) {
        this.currentPage = pageEvent.pageIndex;

        this.http.get<Book[]>(`http://127.0.0.1:5000//api/v1/books?pn=${this.currentPage}&ps=${this.pageSize}`).subscribe(data => {
            this.books = data;
        })  
    }

    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.http.get<number>("http://127.0.0.1:5000/api/v1/books/count").subscribe(data => {
            this.totalLength = data;
        })

        this.http.get<Book[]>(`http://127.0.0.1:5000/api/v1/books?pn=${this.currentPage}&ps=${this.pageSize}`).subscribe(data => {
            this.books = data;
        })  
    }
}

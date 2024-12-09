import { Component, Injectable, Input, SimpleChanges } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

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
    imports: [MatCardModule],
    templateUrl: './books.component.html',
    styleUrl: './books.component.scss'
    })

@Injectable({providedIn: 'root'})
export class BooksComponent {
    @Input() books: Book[] = [];

    constructor() {}

    ngOnChanges(change: SimpleChanges) {
        if (change['books']) {
          this.books = change['books'].currentValue;
        }
    }
}

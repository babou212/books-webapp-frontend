import { Component, Injectable, Input, SimpleChanges } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Book } from "../interfaces/book";
import { CommonModule } from '@angular/common';

    @Component({
    selector: 'books',
    standalone: true,
    imports: [MatCardModule, CommonModule],
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

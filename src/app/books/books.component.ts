import { Component, Injectable, Input, SimpleChanges } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Book } from "../interfaces/book";
import { CommonModule } from '@angular/common';

/**
 * BooksComponent Component
 * @export
 * @class BooksComponent
 */
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

    /**
    * BooksComponent constructor
    * @returns none
    */
    constructor() {}

    /**
    * Function which handles book changes 
    * @param SimpleChanges
    * @returns none
    */
    ngOnChanges(change: SimpleChanges) {
        if (change['books']) {
          this.books = change['books'].currentValue;
        }
    }
}

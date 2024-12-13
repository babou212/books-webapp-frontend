import { Component, Input } from '@angular/core';
import { User } from '../../../interfaces/user';
import { CommonModule } from '@angular/common';
import { Book } from '../../../interfaces/book';
import { BooksComponent } from "../../../books/books.component";


/**
 * UserBooksComponent Component
 * @export
 * @class UserBooksComponent
 */
@Component({
  selector: 'UserBooks',
  templateUrl: 'userBook.component.html',
  styleUrl: 'userBook.component.scss',
  imports: [CommonModule, BooksComponent],
})
export class UserBooksComponent {
    @Input() user!: User;
    userBooks: Book[] = [];

    /**
    * UserBooksComponent constructor
    * @returns none
    */
    constructor() {}

    /**
    * UserBooksComponent init function, sets this.userBooks to current users books
    * @returns none
    */
    ngOnInit() {
        this.userBooks = this.user.books;
    }
}

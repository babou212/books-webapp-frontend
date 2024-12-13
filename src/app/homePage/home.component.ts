import { BookService } from './../services/book.service';
import { Component } from '@angular/core';
import { Navbar } from "../topBar/nav.component";
import { BooksComponent } from "../books/books.component";
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { Book } from "../interfaces/book";

/**
 * HomeComponent Component
 * @export
 * @class HomeComponent
 */
@Component({
  selector: 'Home',
  templateUrl: 'home.component.html',
  styleUrl: 'home.component.scss',
  imports: [Navbar, BooksComponent, MatPaginatorModule, MatButtonModule, MatToolbarModule],
})
export class HomeComponent {
    books: Book[] = [];
    totalLength: number = 0;
    pageSize: number = 8;
    currentPage: number = 0;

    /**
    * HomeComponent constructor
    * @param BookService
    * @returns none
    */
    constructor(private bookService: BookService) {}

    /**
    * Function to re-fetch paginated books
    * @returns none
    */
    refresh() {
        this.bookService.getPaginatedBooks(0, this.pageSize);
        this.bookService.getBooks().subscribe((books) => this.books = books);
    }

    /**
    * Function which handles books pagination 
    * @param PageEvent
    * @returns none
    */
    handlePageEvent(pageEvent: PageEvent) {
        this.currentPage = pageEvent.pageIndex;

        this.bookService.getPaginatedBooks(this.currentPage, this.pageSize);
        this.bookService.getBooks().subscribe((books) => this.books = books);
    }
    
    /**
    * Innit Function which handles initial books pagination 
    * @returns none
    */
    ngOnInit() {
        this.totalLength = this.bookService.bookCount;

        this.bookService.getPaginatedBooks(this.currentPage, this.pageSize);
        this.bookService.getBooks().subscribe((books) => this.books = books);
    }
}

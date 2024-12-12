import { Component } from '@angular/core';
import { BookService } from '../services/book.service';
import { Navbar } from "../topBar/nav.component";
import { BooksComponent } from "../books/books.component";
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { Book } from "../interfaces/book";

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

    constructor(private bookService: BookService) {}

    refresh() {
        this.bookService.getPaginatedBooks(0, this.pageSize);
        this.bookService.getBooks().subscribe((books) => this.books = books);
    }

    handlePageEvent(pageEvent: PageEvent) {
        this.currentPage = pageEvent.pageIndex;

        this.bookService.getPaginatedBooks(this.currentPage, this.pageSize);
        this.bookService.getBooks().subscribe((books) => this.books = books);
    }
    
    ngOnInit() {
        this.totalLength = this.bookService.bookCount;

        this.bookService.getPaginatedBooks(this.currentPage, this.pageSize);
        this.bookService.getBooks().subscribe((books) => this.books = books);
    }
}

import { Component } from '@angular/core';
import { BooksDataService } from './../books-data.service';
import { Navbar } from "../topBar/nav.component";
import { BooksComponent } from "../books/books.component";
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { Book } from "../interfaces/book";

@Component({
  selector: 'Home',
  templateUrl: 'home.component.html',
  styleUrl: 'home.component.scss',
  imports: [Navbar, BooksComponent, MatPaginatorModule],
})
export class HomeComponent {
    books: Book[] = [];
    totalLength: number = 0;
    pageSize: number = 8;
    currentPage: number = 0;

    constructor(private booksDataService: BooksDataService) { 
        this.booksDataService.emitBooks.subscribe(
            () => {
              this.books = this.booksDataService.books;
            }    
          );
    }

    upDateBooks(upDatedBooks: Book[]) {
        this.books = upDatedBooks;
    }

    handlePageEvent(pageEvent: PageEvent) {
        this.currentPage = pageEvent.pageIndex;

        this.books = this.booksDataService.getPaginatedBooks(this.currentPage, this.pageSize);
    }
    
    ngOnInit() {
        this.totalLength = this.booksDataService.bookCount;

        this.books = this.booksDataService.getPaginatedBooks(this.currentPage, this.pageSize);
    }
}

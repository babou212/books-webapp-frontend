import { BooksDataService } from '../../books-data.service';
import { Component, Output, EventEmitter } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input'; 

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
  selector: 'Search',
  templateUrl: 'search.component.html',
  styleUrl: 'search.Component.scss',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule],
})
export class Search {
    searchQuery = "";
    @Output() books = new EventEmitter<Book[]>(); 

    constructor(private booksDataService: BooksDataService) {}

    onSearchUpdate(searchQuery: string) {
      if (searchQuery == "") {
        window.location.reload();
      }

      this.searchQuery = searchQuery;
      console.log(this.searchQuery);

      this.books.emit(this.booksDataService.searchBooks(this.searchQuery));
    }
}

import { BooksDataService } from '../../books-data.service';
import { Component, Output, EventEmitter } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input'; 
import { Book } from "../../interfaces/book";

@Component({
  selector: 'Search',
  templateUrl: 'search.component.html',
  styleUrl: 'search.component.scss',
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

import { BooksDataService } from '../../books-data.service';
import { Component, Output, EventEmitter } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input'; 

@Component({
  selector: 'Search',
  templateUrl: 'search.component.html',
  styleUrl: 'search.component.scss',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule],
})
export class Search {
    searchQuery = "";

    constructor(private booksDataService: BooksDataService) {}

    onSearchUpdate(searchQuery: string) {
      if (searchQuery == "") {
        this.booksDataService.books = this.booksDataService.getPaginatedBooks(0, 8);
      }

      this.searchQuery = searchQuery;

      this.booksDataService.searchBooks(this.searchQuery)
    }
}

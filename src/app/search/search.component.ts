import { BooksDataService } from '../services/book.service';
import { Component } from '@angular/core';
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
      this.searchQuery = searchQuery;

      this.booksDataService.searchBooks(this.searchQuery)
    }
}

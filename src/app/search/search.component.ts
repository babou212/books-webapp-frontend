import { BookService } from '../services/book.service';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input'; 

/**
 * Search Component
 * @export
 * @class Search
 */
@Component({
  selector: 'Search',
  templateUrl: 'search.component.html',
  styleUrl: 'search.component.scss',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule],
})
export class Search {
    searchQuery = "";

    /**
    * Search constructor
    * @param BookService 
    * @returns none
    * 
    */
    constructor(private bookService: BookService) {}

    /**
    * Updates books via search api
    * @param searchQuery
    * @returns none
    */
    onSearchUpdate(searchQuery: string) {
      this.searchQuery = searchQuery;

      this.bookService.searchBooks(this.searchQuery)
    }
}

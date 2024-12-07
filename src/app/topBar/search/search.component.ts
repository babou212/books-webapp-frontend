import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input'; 
import { HttpClient } from '@angular/common/http';

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
  styleUrl: 'search.component.scss',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule],
})
export class Search {
    books: Book[] = [];
    searchQuery = signal<string>('');

    constructor(private http: HttpClient) {}

    onSearchUpdated(searchQuery: string) {
        this.searchQuery.set(searchQuery);

        this.http.get<Book[]>(`http://127.0.0.1:5000//api/v1//books/results?query=${searchQuery}`).subscribe(data => {
            this.books = data;
        })  
      }
}

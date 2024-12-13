import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl,  FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BookService } from '../../../services/book.service';
import { Book } from '../../../interfaces/book';
import { HttpClient } from '@angular/common/http';

/**
 * UpdateBookComponent Component
 * @export
 * @class UpdateBookComponent
 */
@Component({
  selector: 'UpdateBook',
  templateUrl: 'updateBook.component.html',
  styleUrl: 'updateBook.component.scss',
  imports: [CommonModule, 
    MatFormFieldModule,
    MatInputModule, 
    MatSelectModule, 
    MatCardModule, 
    FormsModule, 
    MatButtonModule, 
    ReactiveFormsModule],
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateBookComponent {
    books: Book[] = [];
    book!: Book;

    /**
    * UpdateBookComponent constructor
    * @param BookService
    * @param HttpClient
    * @returns none
    */
    constructor(private bookService: BookService, private http: HttpClient) {}

    bookControl = new FormControl(this.books[0]);

    /**
    * function to update a book
    * @returns none
    */
    updateBook() {
        const updatedBook = {
            "title": this.book.title,
            "isbn": this.book.isbn,
            "pageCount": this.book.pageCount,
            "publishedDate": Date.now(),
            "thumbnailUrl" : this.book.thumbnailUrl,
            "description" :  this.book.description,
            "price" : this.book.price,
            "authors" : [this.book.authors],
            "categories" : [this.book.categories],
        }

        this.bookService.updateBook(Object.values(this.book._id)[0], updatedBook);
    }

    /**
    * UpdateBookComponent init function grabs books via api
    * @returns none
    */
    ngOnInit() {
        this.http.get<Book[]>(`http://127.0.0.1:5000//api/v1/books`).subscribe(data => {
            this.books = data;
            this.book = this.books[0];
        })
    }
}

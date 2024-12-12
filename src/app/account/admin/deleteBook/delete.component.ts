import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl,  FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BooksDataService } from '../../../services/book.service';
import { Book } from '../../../interfaces/book';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'DeletePage',
  templateUrl: 'delete.component.html',
  styleUrl: 'delete.component.scss',
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
export class DeleteComponent {
    books: Book[] = [];
    book!: Book;

    constructor(private booksDataService: BooksDataService, private http: HttpClient) {}

    bookControl = new FormControl(this.books[0]);

    deleteBook() {
        this.booksDataService.deleteBook(Object.values(this.book._id)[0]);
    }

    ngOnInit() {
        this.http.get<Book[]>(`http://127.0.0.1:5000//api/v1/books`).subscribe(data => {
            this.books = data;
            this.book = this.books[0];
        })
    }
}
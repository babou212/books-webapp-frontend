import { Component } from '@angular/core';
import {FormControl,  FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { Book } from '../../../interfaces/book';
import { UserService } from '../../../services/user.service';
import { HttpClient } from '@angular/common/http';

/**
 * ReserveComponent Component
 * @export
 * @class ReserveComponent
 */
@Component({
  selector: 'ReserveBooks',
  templateUrl: 'reserve.component.html',
  styleUrl: 'reserve.component.scss',
  imports: [CommonModule, MatFormFieldModule,
    MatInputModule, 
    MatSelectModule, 
    MatCardModule, 
    FormsModule, 
    MatButtonModule, 
    ReactiveFormsModule],
})
export class ReserveComponent {
    userBooks: Book[] = [];
    book!: Book;

    /**
    * ReserveComponent constructor
    * @param UserService
    * @param HttpClient
    * @returns none
    */
    constructor(private userService: UserService, private http: HttpClient) {}

    bookControl = new FormControl(this.userBooks[0]);

    /**
    * function which reserves a book
    * @returns none
    */
    reserveBook() {
        this.userService.reserveBook(Object.values(this.book._id)[0]);
        this.userService.getUser().subscribe((user) => user.books.push(this.book));
        this.ngOnInit();
    }

    /**
    * ReserveComponent init function sets books 
    * @returns none
    */
    ngOnInit() {
        this.http.get<Book[]>(`http://127.0.0.1:5000//api/v1/books`).subscribe(data => {
            this.userBooks = data.filter((book) => book.reserved == false);
            this.book = this.userBooks[0];
        })

        this.book = this.userBooks[0];
    }
}

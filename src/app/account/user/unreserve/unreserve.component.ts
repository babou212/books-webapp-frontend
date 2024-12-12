import { Component, Input } from '@angular/core';
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
import { User } from '../../../interfaces/user';

@Component({
  selector: 'UnreserveBooks',
  templateUrl: 'unreserve.component.html',
  styleUrl: 'unreserve.component.scss',
  imports: [CommonModule, MatFormFieldModule,
    MatInputModule, 
    MatSelectModule, 
    MatCardModule, 
    FormsModule, 
    MatButtonModule, 
    ReactiveFormsModule],
})
export class UnreserveComponent {
    @Input() user!: User;
    userBooks: Book[] = [];
    book!: Book;

    constructor(private userService: UserService) {}

    bookControl = new FormControl(this.userBooks[0]);

    unreserveBook() {
        this.userService.unreserveUserBook(Object.values(this.book._id)[0]);
    }

    ngOnInit() {
        this.userBooks = this.user.books.filter((book) => book.reserved == true);
        console.log(this.user.books);

        this.book = this.userBooks[0];
    }
}

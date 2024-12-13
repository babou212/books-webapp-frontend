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
import { User } from '../../../interfaces/user';
import { Router } from '@angular/router';

/**
 * UnreserveComponent Component
 * @export
 * @class UnreserveComponent
 */
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

    /**
    * UnreserveComponent constructor
    * @param UserService
    * @param Router
    * @returns none
    */
    constructor(private userService: UserService, private router: Router) {}

    bookControl = new FormControl(this.userBooks[0]);

    /**
    * function which initiates a book un-reservation 
    * @returns none
    */
    unreserveBook() {
        this.userService.unreserveUserBook(Object.values(this.book._id)[0]);
        this.userService.getUser().subscribe((user) => user.books = user.books.filter((book) => 
            book._id != this.book._id));

        this.ngOnInit();
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
            this.router.navigate(['user']);
        });
    }

    /**
    * UnreserveComponent init function sets current user and this.book
    * @returns none
    */
    ngOnInit() {
        this.userService.getUser().subscribe((user) => { 
            this.userBooks = user.books
        });

        this.book = this.userBooks[0];
    }
}

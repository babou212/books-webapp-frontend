import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BookService } from '../../../services/book.service';

/**
 * PostBookComponent Component
 * @export
 * @class PostBookComponent
 */
@Component({
  selector: 'PostBook',
  templateUrl: 'postBook.component.html',
  styleUrl: 'postBook.component.scss',
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
export class PostBookComponent {
    title: string = "";
    description: string = "";
    ISBN: string = "";
    pageCount: number = 0;
    price: number = 0;
    url: string = "";
    authors: string = "";
    categories: string = "";

    /**
    * PostBookComponent constructor
    * @param BookService
    * @returns none
    */
    constructor(private bookService: BookService) {}

    /**
    * function to post book to bookService via api
    * @returns none
    */
    postBook() {
        const newBook = {
            "title": this.title,
            "isbn": this.ISBN,
            "pageCount": this.pageCount,
            "publishedDate": Date.now(),
            "thumbnailUrl" : this.url,
            "description" :  this.description,
            "price" : this.price,
            "authors" : [this.authors],
            "categories" : [this.categories],
        }

        this.bookService.addBook(newBook);

        this.title = "";
        this.description = "";
        this.ISBN = "";
        this.pageCount = 0;
        this.price = 0;
        this.url = "";
        this.authors = "";
        this.categories = "";

    }
}

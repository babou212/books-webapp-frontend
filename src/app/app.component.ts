import { Component } from '@angular/core';
import { BooksComponent } from "./books/books.component";
import {Toolbar } from "./topBar/nav.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BooksComponent, Toolbar],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'books-webapp-frontend';
}

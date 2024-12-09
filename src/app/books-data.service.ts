import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from './interfaces/book';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class BooksDataService {
  books: Book[] = [];
  bookCount = 0;

  constructor(private http: HttpClient, private userService: UserService) { this.setBookCount() }

  getBooks() {
    this.http.get<Book[]>(`http://127.0.0.1:5000//api/v1/books`).subscribe(data => {
      this.books = data;
    })

    return this.books;
  }

  setBookCount() {
    this.http.get<number>("http://127.0.0.1:5000/api/v1/books/count").subscribe(data => {
      this.bookCount = data;
    })
  }

  getPaginatedBooks(currentPage: number, pageSize: number) {
    this.http.get<Book[]>(`http://127.0.0.1:5000//api/v1/books?pn=${currentPage}&ps=${pageSize}`).subscribe(data => {
      this.books = data;
  })

   return this.books;
  }

  searchBooks(searchQuery: string) {
    let shouldReturnData = false;

    this.http.get<Book[]>(`http://127.0.0.1:5000//api/v1//books/results?query=${searchQuery}`).subscribe(data => {
      if(data.length > 0) {
        this.books = data;
        shouldReturnData = true;
      } 
    })

    if (shouldReturnData) {
      return this.books;
    }
    return this.books;
  }

  addBook(book: Book) {
    const httpHeaders: HttpHeaders = new HttpHeaders({
      "x-access-token": this.userService.jwtToken
    });

    this.books.push(book)

    this.http.post<Book>(`http://127.0.0.1:5000/api/v1/books`, book, { headers: httpHeaders }).subscribe(data => {
      console.log(data);
    })
  }
}

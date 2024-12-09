import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from './interfaces/book';

@Injectable({
  providedIn: 'root'
})
export class BooksDataService {
  books: Book[] = [];
  bookCount = 0;

  constructor(private http: HttpClient) { this.setBookCount() }

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
    this.books.push(book)

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json').set('x-access-token', "");

    this.http.post<Book[]>(`http://127.0.0.1:5000//api/v1//books`, {headers: headers, book}).subscribe(data => {
      console.log(data);
    })
  }
}

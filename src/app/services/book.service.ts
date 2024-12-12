import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from '../interfaces/book';

@Injectable({
  providedIn: 'root'
})
export class BooksDataService {
  books: Book[] = [];
  emitBooks = new EventEmitter<any>();
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
        this.emitBooks.emit();
        shouldReturnData = true;
      } 
    })

    if (shouldReturnData) {
      return this.books;
    }
    return this.books;
  }

  addBook(book: any) {
    const jwt_token: any = localStorage.getItem("jwt_token")
    const httpHeaders: HttpHeaders = new HttpHeaders({
      "x-access-token": jwt_token
    });

    this.http.post<Book>(`http://127.0.0.1:5000/api/v1/books`, book, { headers: httpHeaders }).subscribe(data => {
    })
  }

  updateBook(id: string, book: any) {
    const jwt_token: any = localStorage.getItem("jwt_token")
    const httpHeaders: HttpHeaders = new HttpHeaders({
      "x-access-token": jwt_token
    });

    this.http.put<Book>(`http://127.0.0.1:5000/api/v1/books/${id}`, book, { headers: httpHeaders }).subscribe(data => {
    })
  }

  deleteBook(id: string) {
    const jwt_token: any = localStorage.getItem("jwt_token")
    const httpHeaders: HttpHeaders = new HttpHeaders({
      "x-access-token": jwt_token
    });
    
    this.http.delete<any>(`http://127.0.0.1:5000/api/v1/books/${id}`, { headers: httpHeaders }).subscribe(data => {
      console.log(data);
    })
  }
}

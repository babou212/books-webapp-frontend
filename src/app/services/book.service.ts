import { Book } from './../interfaces/book';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private bookSubject$ = new BehaviorSubject<Book[]>([]);
  bookCount = 0;

  /**
  * The constructor for the user service
  * @param http Injecting the HttpClient to the user service
  * class
  */
  constructor(private http: HttpClient) { this.setBookCount() }

  /**
  * getter for returning new book values
  * @returns Observable<Book[]>
  */
  getBooks(): Observable<Book[]> {
    return this.bookSubject$;
  }

  /**
  * returns arrays of books
  * @returns none
  * class
  */
  getBooksFromApi(): Book[] {
    let books: Book[] = [];

    this.http.get<Book[]>(`http://127.0.0.1:5000//api/v1/books`).subscribe(data => {
      this.bookSubject$.next(data);

      books = data
      return data;
    })

    return books;
  }

  /**
  * Sets count for amount of books available
  * @returns number
  */
  setBookCount(): number {
    let count = 100;

    this.http.get<number>("http://127.0.0.1:5000/api/v1/books/count").subscribe(data => {
      this.bookCount = data;
      count = data;
    })

    return count;
  }

  /**
  * retrieves paginated books from api and sets bookSubject$
  * @returns none
  */
  getPaginatedBooks(currentPage: number, pageSize: number) {
    this.http.get<Book[]>(`http://127.0.0.1:5000//api/v1/books?pn=${currentPage}&ps=${pageSize}`).subscribe(data => {
      this.bookSubject$.next(data);
  })
  }

  /**
  * retrieves books from api search query and sets bookSubject$
  * @returns none
  */
  searchBooks(searchQuery: string) {
    this.http.get<Book[]>(`http://127.0.0.1:5000//api/v1//books/results?query=${searchQuery}`).subscribe(data => {
      if(data.length > 0) {
        this.bookSubject$.next(data);
      } 
    })
  }

  /**
  * Posts new book to api
  * @param Book 
  * @returns none
  */
  addBook(book: any) {
    const jwt_token: any = localStorage.getItem("jwt_token")
    const httpHeaders: HttpHeaders = new HttpHeaders({
      "x-access-token": jwt_token
    });

    this.http.post<Book>(`http://127.0.0.1:5000/api/v1/books`, book, { headers: httpHeaders }).subscribe(data => {
      return data;
    })
  }

  /**
  * Put request to update book values
  * @param id
  * @param book 
  * @returns none
  */
  updateBook(id: string, book: any) {
    const jwt_token: any = localStorage.getItem("jwt_token")
    const httpHeaders: HttpHeaders = new HttpHeaders({
      "x-access-token": jwt_token
    });

    this.http.put<Book>(`http://127.0.0.1:5000/api/v1/books/${id}`, book, { headers: httpHeaders }).subscribe(data => {
      return data;
    })
  }
 
  /**
  * Delete request to delete book
  * @param id
  * @returns none
  */
  deleteBook(id: string) {
    const jwt_token: any = localStorage.getItem("jwt_token")
    const httpHeaders: HttpHeaders = new HttpHeaders({
      "x-access-token": jwt_token
    });
    
    this.http.delete<any>(`http://127.0.0.1:5000/api/v1/books/${id}`, { headers: httpHeaders }).subscribe(data => {
      return data;
    })
  }
}

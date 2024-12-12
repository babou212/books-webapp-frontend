import { TestBed } from '@angular/core/testing';

import { BookService } from './book.service';

describe('BooksDataService', () => {
  let service: BookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../homePage/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from '../login/login.component';
import { BooksComponent } from './books.component';

describe('BooksComponent', () => {
  let service: BooksComponent;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BooksComponent, 
        BrowserAnimationsModule,
        RouterModule.forRoot(
          [{path: 'login', component: LoginComponent}, {path: '', component: HomeComponent}]
        )
      ],
      providers: [
        provideHttpClient(),
        LoginComponent,
        BooksComponent
      ],
    }).compileComponents();
    service = TestBed.inject(BooksComponent);
  });

   it('should create the component', () => {
      expect(service).toBeTruthy();
    });

    it('Should display main container', () => {
      const fixture = TestBed.createComponent(BooksComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;

      expect(compiled.querySelector('div')).toBeTruthy();
    });

    it('Should display books containers', () => {
      const fixture = TestBed.createComponent(BooksComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;

      expect(compiled.querySelector('.books-card-container')).toBeTruthy();
    });
});

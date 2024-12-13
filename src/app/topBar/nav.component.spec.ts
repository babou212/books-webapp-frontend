import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../homePage/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Navbar } from './nav.component';
import { RegistrationComponent } from '../userRegistration/registration.component';

describe('NavBarComponent', () => {
  let service: Navbar;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Navbar, 
        BrowserAnimationsModule,
        RouterModule.forRoot(
          [{path: 'register', component: RegistrationComponent}, {path: '', component: HomeComponent}]
        )
      ],
      providers: [
        provideHttpClient(),
        Navbar,
      ],
    }).compileComponents();
    service = TestBed.inject(Navbar);
  });

   it('should create the component', () => {
      expect(service).toBeTruthy();
    });

    it('Should display nav bar', () => {
      const fixture = TestBed.createComponent(Navbar);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;

      expect(compiled.querySelector('mat-toolbar')).toBeTruthy();
    });

    it('Should display search', () => {
        const fixture = TestBed.createComponent(Navbar);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
  
        expect(compiled.querySelector('Search')).toBeTruthy();
    });
});

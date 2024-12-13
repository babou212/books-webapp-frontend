import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../homePage/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './registration.component';

describe('RegisterComponent', () => {
  let service: RegistrationComponent;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RegistrationComponent, 
        BrowserAnimationsModule,
        RouterModule.forRoot(
          [{path: 'register', component: RegistrationComponent}, {path: '', component: HomeComponent}]
        )
      ],
      providers: [
        provideHttpClient(),
        RegistrationComponent,
      ],
    }).compileComponents();
    service = TestBed.inject(RegistrationComponent);
  });


   it('should create the component', () => {
      expect(service).toBeTruthy();
    });

    it('Should display card', () => {
      const fixture = TestBed.createComponent(RegistrationComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;

      expect(compiled.querySelector('mat-card')).toBeTruthy();
    });

    it('Should display form', () => {
      const fixture = TestBed.createComponent(RegistrationComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;

      expect(compiled.querySelector('mat-form-field')).toBeTruthy();
    });

    it('Should display form', () => {
      const fixture = TestBed.createComponent(RegistrationComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;

      expect(compiled.querySelector('input')).toBeTruthy();
    });

    it('Should display button', () => {
      const fixture = TestBed.createComponent(RegistrationComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;

      expect(compiled.querySelector('button')).toBeTruthy();
    });
});

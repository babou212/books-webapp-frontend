import { TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { provideHttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../homePage/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('LoginComp', () => {
  let service: LoginComponent;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        LoginComponent, 
        BrowserAnimationsModule,
        RouterModule.forRoot(
          [{path: 'login', component: LoginComponent}, {path: '', component: HomeComponent}]
        )
      ],
      providers: [
        provideHttpClient(),
        LoginComponent,

      ],
    }).compileComponents();
    service = TestBed.inject(LoginComponent);
  });


   it('should create the component', () => {
      expect(service).toBeTruthy();
    });

    it('Should login', async () => {
      const userName = "john_doe";
      const password = "5+F0gPlRNS5wxo2o7zQ=";

      service.userName = userName;
      service.password = password;

      service.user

      expect(service.user).not.toBeUndefined();
    });

    it('Should display card', () => {
      const fixture = TestBed.createComponent(LoginComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;

      expect(compiled.querySelector('mat-card')).toBeTruthy();
    });

    it('Should display form', () => {
      const fixture = TestBed.createComponent(LoginComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;

      expect(compiled.querySelector('mat-form-field')).toBeTruthy();
    });

    it('Should display form', () => {
      const fixture = TestBed.createComponent(LoginComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;

      expect(compiled.querySelector('input')).toBeTruthy();
    });

    it('Should display button', () => {
      const fixture = TestBed.createComponent(LoginComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;

      expect(compiled.querySelector('button')).toBeTruthy();
    });
});

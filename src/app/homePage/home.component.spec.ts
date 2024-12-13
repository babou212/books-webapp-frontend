import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../homePage/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from '../login/login.component';

describe('HomeComponent', () => {
  let service: HomeComponent;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HomeComponent, 
        BrowserAnimationsModule,
        RouterModule.forRoot(
          [{path: 'login', component: LoginComponent}, {path: '', component: HomeComponent}]
        )
      ],
      providers: [
        provideHttpClient(),
        LoginComponent,
        HomeComponent
      ],
    }).compileComponents();
    service = TestBed.inject(HomeComponent);
  });

   it('should create the component', () => {
      expect(service).toBeTruthy();
    });

    it('Should display toolbar', () => {
      const fixture = TestBed.createComponent(HomeComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;

      expect(compiled.querySelector('mat-toolbar')).toBeTruthy();
    });

    it('Should display paginator', () => {
      const fixture = TestBed.createComponent(HomeComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;

      expect(compiled.querySelector('mat-paginator')).toBeTruthy();
    });

    it('Should display refresh button', () => {
      const fixture = TestBed.createComponent(HomeComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;

      expect(compiled.querySelector('button')).toBeTruthy();
    });

    it('Should display navbar', () => {
      const fixture = TestBed.createComponent(HomeComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;

      expect(compiled.querySelector('Navbar')).toBeTruthy();
    });
});

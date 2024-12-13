import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../homePage/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from '../login/login.component';
import { UserPageComponent } from './account.component';

describe('AccountComponent', () => {
  let service: UserPageComponent;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        UserPageComponent, 
        BrowserAnimationsModule,
        RouterModule.forRoot(
          [{path: 'login', component: LoginComponent}, {path: '', component: HomeComponent}]
        )
      ],
      providers: [
        provideHttpClient(),
        LoginComponent,
        UserPageComponent
      ],
    }).compileComponents();
    service = TestBed.inject(UserPageComponent);
  });

   it('should create the component', () => {
      expect(service).toBeTruthy();
    });
});

import { Routes } from '@angular/router';
import { HomeComponent } from './homePage/home.component';
import { LoginComponent } from './login/login.component';
import { UserPageComponent } from './account/account.component';
import { RegistrationComponent } from "./userRegistration/registration.component";

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'user',
        component: UserPageComponent,
      },
      {
        path: 'register',
        component: RegistrationComponent,
      },
];

import { UserService } from '../services/user.service';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { User } from '../interfaces/user';
import { Router } from '@angular/router';

/**
 * RegistrationComponent Component
 * @export
 * @class RegistrationComponent
 */
@Component({
  selector: 'Registration',
  templateUrl: 'registration.component.html',
  styleUrl: 'registration.component.scss',
  imports: [
    FormsModule,
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    RouterModule],
})
export class RegistrationComponent {
    user: string = '';
    password: string = '';
    validUser!: User;
    
  /**
  * RegistrationComponent constructor
  * @param UserService 
  * @param Router
  * @returns none
  * 
  */
    constructor(private userService: UserService, private router: Router) {}

  /**
  * Function to initiate creation of new user 
  * @returns none
  * 
  */
    async register() {
        this.userService.userRegistration(this.user, this.password);
        if (this.validUser.username != undefined) {
            this.router.navigate(['/']);
        }
    }
}

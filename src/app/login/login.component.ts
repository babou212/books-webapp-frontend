import { Observable } from 'rxjs';
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
 * LoginComponent Component
 * @export
 * @class LoginComponent
 */
@Component({
  selector: 'Login',
  templateUrl: 'login.component.html',
  styleUrl: 'login.component.scss',
  imports: [
    FormsModule,
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    RouterModule],
})
export class LoginComponent {
    userName: string = '';
    password: string = '';
    user!: User;
    
    /**
    * LogoutComponent constructor
    * @param searchQuery
    * @returns none
    */
    constructor(private userService: UserService, private router: Router) {}

    ngOnInit() {
      this.userService.getUser().subscribe((user) => this.user = user);
    }

    /**
    * login function
    * @param userName
    * @param password
    * @returns none
    */
    login() {
        this.userService.userLogin(this.userName, this.password);

        const loginUrl = "/login";
        
        this.userService.getUser().subscribe((user) => {
          if (user._id != "" && this.router.url == loginUrl) {

            console.log("halp")
            this.router.navigate(['/']);
          }
        })
    }
}

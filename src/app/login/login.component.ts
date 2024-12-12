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
    user: string = '';
    password: string = '';
    validUser!: User;
    
    constructor(private userService: UserService, private router: Router) {
        this.userService.userEmit.subscribe(
            () => {
              this.validUser = this.userService.user;
            }    
          );
     }

    async login() {
        this.userService.userLogin(this.user, this.password);
        if (this.validUser.username != undefined) {
            this.router.navigate(['/']);
        }
    }
}

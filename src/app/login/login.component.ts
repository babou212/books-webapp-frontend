import { UserService } from './../user.service';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

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
    MatFormFieldModule],
})
export class LoginComponent {
    user: string = '';
    password: string = '';
    loginValid: boolean = true;
    
    constructor(private userService: UserService) { }

    login() {
        this.userService.userLogin(this.user, this.password);
        console.log(this.userService.jwtToken);
    }
}

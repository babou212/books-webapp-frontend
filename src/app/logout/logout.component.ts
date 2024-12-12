import { UserService } from '../services/user.service';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { User } from '../interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'Logout',
  templateUrl: 'logout.component.html',
  styleUrl: 'logout.component.scss',
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule],
})
export class LogoutComponent {
    validUser!: User;
    
    constructor(private userService: UserService) {
     }

    logout() {
        this.userService.userLogout();
        window.location.reload();
    }
}

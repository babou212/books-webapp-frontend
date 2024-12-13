import { UserService } from '../services/user.service';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { User } from '../interfaces/user';

/**
 * LogoutComponent Component
 * @export
 * @class LogoutComponent
 */
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
    
    /**
    * LogoutComponent constructor
    * @param searchQuery
    * @returns none
    */
    constructor(private userService: UserService) {
     }

    /**
    * Logs current user out
    * @param searchQuery
    * @returns none
    */
    logout() {
        this.userService.userLogout();
        window.location.reload();
    }
}

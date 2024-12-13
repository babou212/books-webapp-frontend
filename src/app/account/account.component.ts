import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../interfaces/user';
import { CommonModule } from '@angular/common';
import { PostBookComponent } from "./admin/postBook/postBook.component";
import { UpdateBookComponent } from "./admin/update/updateBook";
import { DeleteComponent } from "./admin/deleteBook/delete.component";
import { UserBooksComponent } from "./user/books/userBook.component";
import { ReserveComponent } from "./user/reserve/reserve.component";
import { UnreserveComponent } from "./user/unreserve/unreserve.component";

/**
 * UserPageComponent Component
 * @export
 * @class UserPageComponent
 */
@Component({
  selector: 'AccountPage',
  templateUrl: 'account.component.html',
  styleUrl: 'account.component.scss',
  imports: [CommonModule,
    PostBookComponent,
    UpdateBookComponent,
    RouterModule,
    MatButtonModule,
    DeleteComponent,
    UserBooksComponent, 
    ReserveComponent, 
    UnreserveComponent],
})
export class UserPageComponent {
  user!: User;
  isAdmin = false;

    /**
    * UserPageComponent constructor
    * @param UserService
    * @param Router
    * @returns none
    */
    constructor(private userService: UserService, private router: Router) {}

    /**
    * UserPageComponent init function which grabs current user if it exists
    * @returns none
    */
    ngOnInit() {
      this.userService.getUser().subscribe((user) => {
        if (user._id == "") {
          this.router.navigate(['/login']);
        } else if (user.role == "admin") {
          console.log(user.role);
          this.isAdmin = true;
        }

        this.user = user;
      });
    }
}

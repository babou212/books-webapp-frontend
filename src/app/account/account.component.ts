import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../interfaces/user';
import { CommonModule } from '@angular/common';
import { PostBookComponent } from "./admin/postBook/postBook.component";
import { UpdateBookComponent } from "./admin/update/updateBook";
import { DeleteComponent } from "./admin/deleteBook/delete.component";

@Component({
  selector: 'AccountPage',
  templateUrl: 'account.component.html',
  styleUrl: 'account.component.scss',
  imports: [CommonModule, PostBookComponent, UpdateBookComponent, RouterModule, MatButtonModule, DeleteComponent],
})
export class UserPageComponent {
    user!: User;

    constructor(private userService: UserService, private router: Router) {
        this.userService.userEmit.subscribe(
            () => {
              this.user = this.userService.user;
            }    
          );
    }

    ngOnInit() {
        this.user = this.userService.user;

        if (this.user == undefined){
            this.router.navigate(['/login']);
        }
    }
}

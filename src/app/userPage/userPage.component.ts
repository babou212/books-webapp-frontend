import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../interfaces/user';
import { CommonModule } from '@angular/common';
import { AdminFormComponent } from "./adminForm/adminForm.component";

@Component({
  selector: 'UserPage',
  templateUrl: 'userPage.component.html',
  styleUrl: 'userPage.component.scss',
  imports: [CommonModule, AdminFormComponent],
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

        // console.log(this.userService.role);

        if (this.user == undefined){
            this.router.navigate(['/login']);
        }
    }
}

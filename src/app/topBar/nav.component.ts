import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { Search } from "./search/search.component";

@Component({
  selector: 'Navbar',
  templateUrl: 'nav.component.html',
  styleUrl: 'nav.component.scss',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, RouterModule, Search],
})
export class Navbar {}

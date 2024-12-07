import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input';
import { Search } from "./search/search.component"; 

@Component({
  selector: 'Toolbar',
  templateUrl: 'nav.component.html',
  styleUrl: 'nav.component.scss',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, Search],
})
export class Toolbar {}

import { Component, Input, input } from '@angular/core';
import { Category } from '../../interfaces/categories.interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
@Input() categories: Category[] = [] 
}

import { Component, Input } from '@angular/core';
import { Recipe } from './recipe';



@Component({
  selector: 'my-recipe-detail',
  template: `
    <div *ngIf="recipe">
      <h1>{{recipe.title}}</h1>
      <h3>Ingredients</h3>
      <ul>
        <li>{{recipe.ingredients}}</li>
      </ul>
    </div>
  `
})

export class RecipeDetailComponent {
  @Input()
  recipe: Recipe;


}


// [(ngModel)]="recipe.ingredients"

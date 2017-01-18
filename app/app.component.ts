import { Component } from '@angular/core';
import { Recipe } from './recipe';
import { RecipeService } from './recipe.service';

import { OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Suzi's Secret Recipe Box <span class="time">{{month}}-{{day}}-{{year}}</span></h1>
      <h3>Soup Recipes</h3>
      <ul>
        <li *ngFor="let recipe of recipes" [class.selected]="recipe === selectedRecipe" (click)="onSelect(recipe)"><span class="recipeNumber">{{recipe.id}} - </span> {{recipe.title}}</li>
      </ul>
      <my-recipe-detail [recipe]="selectedRecipe"></my-recipe-detail>
    </div>
  `,
  providers: [RecipeService]
})

export class AppComponent implements OnInit {
  currentTime = new Date();
  month: number = this.currentTime.getMonth() +1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  recipes: Recipe[];
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  getRecipes(): void {
    this.recipeService.getRecipes().then(recipes => this.recipes = recipes);
  }

  ngOnInit(): void {
    this.getRecipes();
  }

  onSelect(recipe: Recipe): void {
    this.selectedRecipe = recipe;
  }
}

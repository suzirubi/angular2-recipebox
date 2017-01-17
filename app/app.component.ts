import { Component } from '@angular/core';
import { Recipe } from './recipe';

const RECIPES: Recipe[] = [
  { id: 1, title: 'Vegetable Soup Stock', ingredients: ['1 Medium Onion', '1 Large Leek', '1 Fennel (bulb only)', '3 Large Celery Stalks', '1 Large Parsnip', 'Salt', '1 Bay Leaf', '6 Juniper Berries', 'Vermouth or Cooking Sherry', '3 Sprigs Thyme', '1 Sprig Oregano', '1 Small Potato', 'Vegetable trimmings'], description: 'Dice and saute onion, leek, fennel and celery in oil until onion translucent. Add salt to taste and cook for 2 minutes. Add diced parsnip and any other hard vegetable trimmings. Add juniper berries, peppercorn, thyme, oregano and bay leaf and cook on high for 5 minutes. Add vermouth or cooking sherry. Fill pot with water and add rest of ingredients plus any leafy vegetable trimmings. Parsley stalks are particularly nice. Simmer for 1 hour or until a nice taste develops.' },
  { id: 2,  title: 'Potato Leek Fennel Soup with Smoked Salmon Garnish', ingredients: ['2 Large Leek', '2 Large Fennel (bulbs only)', '1/2 stick butter', '1 Tbsp Olive Oil', '1 Bay Leaf', 'Vermouth or Cooking Sherry', '8 cups Vegetable Broth', '3-4 large Yukon Gold Potatoes', 'Smoked Salmon for Garnish'], description: 'Dice and saute leek, fennel in buttor and oil until soft. Add salt to taste and cook for 2 minutes. Add bay leaf and cook on high for 5 minutes. Add vermouth or cooking sherry and bring to boil. Fill pot with water and add diced potatoes. Simmer until potatoes soft. Use blender to puree soup. Serve with salmon garnish' }
];

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
  `
})

export class AppComponent {
  currentTime = new Date();
  month: number = this.currentTime.getMonth() +1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  recipes = RECIPES;
  selectedRecipe: Recipe;

  onSelect(recipe: Recipe): void {
    this.selectedRecipe = recipe;
  }
}

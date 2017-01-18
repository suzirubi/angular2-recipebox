import { Injectable } from '@angular/core';

import { Recipe } from './recipe';
import { RECIPES } from './mock-recipes';


@Injectable()
export class RecipeService {
  getRecipes(): Promise<Recipe[]> {
    return Promise.resolve(RECIPES);
  }
  getRecipesSlowly(): Promise<Recipe[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getRecipes()), 2000);
    });
  }
}

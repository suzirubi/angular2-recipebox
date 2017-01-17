import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Suzi's Secret Recipe Box <span class="time"></span></h1>
      <h3>{{currentFocus}}</h3>
      <ul>
        <li *ngFor="let currentRecipe of recipes">{{currentRecipe.title}}</li>
      </ul>
    </div>
  `
})

export class AppComponent {
  currentFocus: string = 'Soups';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() +1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  recipes: Recipe[] = [
    new Recipe('Vegetable Soup Stock'),
    new Recipe('Potato Leek Fennel Soup with Smoked Salmon Garnish'),
    new Recipe('Pumpkin Curry Soup')
  ];
}

export class Recipe {
  public done: boolean = false;
  constructor(public title: string){}
}

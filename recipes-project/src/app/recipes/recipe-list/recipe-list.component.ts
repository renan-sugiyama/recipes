import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() selectedRecipe = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('pie', 'fast and delicious', 'https://cdn.pixabay.com/photo/2017/05/17/02/51/apple-pie-2319691_960_720.jpg'),
    new Recipe('ice-cream', 'super fat', 'https://cdn.pixabay.com/photo/2017/05/17/02/51/apple-pie-2319691_960_720.jpg'),
    new Recipe('pie', 'fast and delicious', 'https://cdn.pixabay.com/photo/2017/05/17/02/51/apple-pie-2319691_960_720.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  selectRecipe(recipeItem: Recipe) {
    this.selectedRecipe.emit(recipeItem);
  }

}

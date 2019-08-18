import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [];
  // private recipes: Recipe[] = [
  //   new Recipe('pie',
  //     'fast and delicious',
  //     'https://cdn.pixabay.com/photo/2017/05/17/02/51/apple-pie-2319691_960_720.jpg',
  //     [
  //       new Ingredient('chicken', 1),
  //       new Ingredient('tomatos', 3),
  //     ]),
  //   new Recipe(
  //     'ice-cream',
  //     'super fat',
  //     'https://upload.wikimedia.org/wikipedia/commons/d/da/Strawberry_ice_cream_cone_%285076899310%29.jpg',
  //     [
  //       new Ingredient('chocolate', 1),
  //       new Ingredient('milk', 3),
  //     ]),
  //   new Recipe('pie',
  //     'fast and delicious',
  //     'https://cdn.pixabay.com/photo/2017/05/17/02/51/apple-pie-2319691_960_720.jpg',
  //     [
  //       new Ingredient('chicken', 1),
  //       new Ingredient('tomatos', 3),
  //     ])
  // ];

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }
}

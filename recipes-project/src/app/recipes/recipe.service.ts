import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {


  private recipes: Recipe[] = [
    new Recipe('pie',
      'fast and delicious',
      'https://cdn.pixabay.com/photo/2017/05/17/02/51/apple-pie-2319691_960_720.jpg',
      [
        new Ingredient('chicken', 1),
        new Ingredient('tomatos', 3),
      ]),
    new Recipe(
      'ice-cream',
      'super fat',
      'https://upload.wikimedia.org/wikipedia/commons/d/da/Strawberry_ice_cream_cone_%285076899310%29.jpg',
      [
        new Ingredient('chocolate', 1),
        new Ingredient('milk', 3),
      ]),
    new Recipe('pie',
      'fast and delicious',
      'https://cdn.pixabay.com/photo/2017/05/17/02/51/apple-pie-2319691_960_720.jpg',
      [
        new Ingredient('chicken', 1),
        new Ingredient('tomatos', 3),
      ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }
}

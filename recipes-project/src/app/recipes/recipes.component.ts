import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit, OnDestroy {
  recipe: Recipe;
  recipeSubscription = new Subscription();

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeSubscription = this.recipeService.selectedItem.subscribe((recipe: Recipe) => {
      this.recipe = recipe;
    });
  }

  ngOnDestroy() {
    this.recipeSubscription.unsubscribe();
  }



}

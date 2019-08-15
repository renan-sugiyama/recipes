import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('pie', 'fast and delicious', 'https://cdn.pixabay.com/photo/2017/05/17/02/51/apple-pie-2319691_960_720.jpg'),
    new Recipe('pie', 'fast and delicious', 'https://cdn.pixabay.com/photo/2017/05/17/02/51/apple-pie-2319691_960_720.jpg'),
    new Recipe('pie', 'fast and delicious', 'https://cdn.pixabay.com/photo/2017/05/17/02/51/apple-pie-2319691_960_720.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}

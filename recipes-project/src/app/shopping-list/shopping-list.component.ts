import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('potatos', 4),
    new Ingredient('chicken', 1),
    new Ingredient('tomatos', 10),
  ];
  constructor() { }

  ngOnInit() {
  }

}

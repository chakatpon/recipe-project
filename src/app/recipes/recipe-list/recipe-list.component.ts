import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [ 
    new Recipe("Guitar", "I love music.", "https://thumbs.gfycat.com/SizzlingQuerulousIrishwaterspaniel-size_restricted.gif"),
    new Recipe("Game", "I love to play game.", "https://media.giphy.com/media/HDaAnwtsSge0E/giphy.gif"),
  ];

  constructor() { }

  ngOnInit() {
  }

}

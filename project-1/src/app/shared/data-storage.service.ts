import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { map } from "rxjs/operators";
@Injectable()
export class dataStorageService{
  constructor(private http: HttpClient, private recipeService:RecipeService) { }
  storedRecipw() {
    const recipes = this.recipeService.getRecipes()
    this.http.put('https://recipesudemy-default-rtdb.firebaseio.com/recipes.json', recipes).subscribe(response => {
      console.log(response)
    })
  }
  fetchRecipe() {
    const recipes = this.recipeService.getRecipes()
    this.http.get<Recipe[]>('https://recipesudemy-default-rtdb.firebaseio.com/recipes.json')
      .pipe(map(recipes => {
        return recipes.map(recipe => {
          return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] }
        })
      }))
      .subscribe(response => {
      this.recipeService.setRecipes(recipes)
    });
  }
}

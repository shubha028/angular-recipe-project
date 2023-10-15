import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService{
  recipesChanged = new Subject<Recipe[]>()
  recipeSelected = new Subject<Recipe>();

    //private recipes: Recipe[]=[
      //  new Recipe("A Test Recipe","This is just a test","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYu23vQeMPj8nHSCvQwA4xd3t9e_WOgJ-6ZQ&usqp=CAU",[new Ingredient('Butter', 1),new Ingredient('Chicken',1)])
  //, new Recipe("A 2nd Test Recipe","This is just a 2nd test","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRozKh1FTwQLhmngLt49HnxbHMf2MtNOqjsAg&usqp=CAU",[new Ingredient('Amul Butter', 1),new Ingredient('Paneer',1)])];
  private recipes: Recipe[]=[]
getRecipes(){
    return this.recipes.slice();
}
getRecipe(index:number){
    return this.recipes.slice()[index];
}
constructor(private shoppingListService: ShoppingListService){}

  onAddToShoppingList(ingredients: Ingredient[]) { this.shoppingListService.addIngredients(ingredients); }
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe)
    this.recipesChanged.next(this.recipes.slice())
  }
  updateRecipe(index: number, newRecipe: Recipe) { this.recipes[index] = newRecipe; this.recipesChanged.next(this.recipes.slice()) }
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1)
    this.recipesChanged.next(this.recipes.slice())
  }
  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes
    this.recipesChanged.next(this.recipes.slice())
  }
}

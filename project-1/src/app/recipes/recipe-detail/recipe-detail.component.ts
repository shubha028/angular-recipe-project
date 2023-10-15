import { Component} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
recipe:Recipe;
showDropdown: boolean = false;
id:number;
constructor(private recipeService:RecipeService, private route:ActivatedRoute, private router:Router){}
onAddToShoppingList(){
this.recipeService.onAddToShoppingList(this.recipe.ingredients)
}

ngOnInit(){
  this.route.params.subscribe(
(params:Params)=>{
this.id=+params['id'];
this.recipe=this.recipeService.getRecipe(this.id);
}
  );
}

onEditRecipe(){
  this.router.navigate(['edit'],{relativeTo:this.route})
}
  onDelete() {
    this.recipeService.deleteRecipe(this.id)
    this.router.navigate(['/recipes'])
  }
}

import { finalize } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { SingleRecipeService } from 'src/app/services/single-recipe/single-recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  public loading = true;
  public similarRecipe: any = [];

  @Input() recipeIdSimilar!: number;

  constructor(private service: SingleRecipeService) {}

  ngOnInit(): void {
    this.takeSimilarRecipes(this.recipeIdSimilar)
  }

  takeSimilarRecipes(id: number) {
    this.service.takeSimilarRecipe(id).pipe(
      finalize( () => {
      this.loading = false;
    })
    )
    .subscribe((data: any) => {
      this.similarRecipe =data.slice(0, 3);
    });
  }

  reloadPage(){
    setTimeout(() => {
      window.location.reload();
    }, 1)
  }
}

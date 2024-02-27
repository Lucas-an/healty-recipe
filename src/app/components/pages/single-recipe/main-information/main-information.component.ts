import { query } from '@angular/animations';
import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs';
import { SingleRecipeService } from 'src/app/services/single-recipe/single-recipe.service';

@Component({
  selector: 'app-main-information',
  templateUrl: './main-information.component.html',
  styleUrls: ['./main-information.component.css']
})
export class MainInformationComponent implements  OnInit{
  public loading: boolean = true;
  public recipeId: number = 1;
  public food: any = [];
  @Output() recipeIdSimilar!: number;

  constructor(
    private service: SingleRecipeService,
    private route: ActivatedRoute
     ) {} // e o primeiro do app de ser iniciado


  ngOnInit(): void {
    this.getRecipeId()
    this.takeRecipe(this.recipeId);
    this.recipeIdSimilar = this.recipeId;
  }// inicia logo apos do constructor

  getRecipeId() {
    this.route.queryParams.subscribe((queryParams: any) => {
      this.recipeId = queryParams['id'];
    });
  }
  takeRecipe(id: number) {
    this.service.takeRecipe(id).pipe(
      finalize(() => {
        this.loading = false;
    })
    ).subscribe((data: any) => {
      this.food = data;
    });
  }

}

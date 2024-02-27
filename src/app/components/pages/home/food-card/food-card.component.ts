import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { RandomRecipesService } from 'src/app/services/random-recipes/random-recipes.service';

@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.css']
})
export class FoodCardComponent implements OnInit {
  public foods: any = [];
  public loading: boolean = true;
  public loadingMore: boolean = false;

  constructor (private service: RandomRecipesService) {}

  ngOnInit(): void {
    this.getFoods()
  }

  getFoods() {
    this.service
    .listRandomFood(6)
    .pipe(
      finalize(()=>{
        this.loading = false;
      })
    )
    .subscribe((data: any)=>{
      console.log(data);
      this.foods = this.foods.concat(data.recipes)
    })
  }
  loadMore() {
    console.log('clicado')
    this.loadingMore = true;
    this.service.listRandomFood(3).pipe(
      finalize(()=>{
        this.loadingMore = false;
      })
    ).subscribe((data: any) => {
      this.foods = this.foods.concat(data.recipes);
    });
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SingleRecipeService {
  constructor(private http: HttpClient) { }

  takeRecipe(id: number) {
    const apiUrl = `https://api.spoonacular.com/recipes/${id}/information?apiKey=43170efcc04649c0bbe300eb29218127`;
    return this.http.get(apiUrl);
  }
  takeSimilarRecipe(id: number):any {
    const apiUrl = `https://api.spoonacular.com/recipes/${id}/similar?apiKey=43170efcc04649c0bbe300eb29218127`;
    return this.http.get(apiUrl);
  }
}

import { Injectable } from '@angular/core';
import { ApiService } from '../network/api.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  
  constructor(
    private apiService: ApiService
  ) { }

  createRecipe(recipe: Recipe) {
    return this.apiService
      .post<Recipe>('/recipes', recipe);
  }

  updateRecipe(recipeId: string, recipe: Recipe) {
    return this.apiService
      .put<Recipe>(`/recipes/${recipeId}`, recipe);
  }

  deleteRecipe(recipeId: string) {
    return this.apiService
      .delete(`/recipes/${recipeId}`);
  }

  getRecipe(recipeId: string) {
    return this.apiService
      .get<Recipe>(`/recipes/${recipeId}`);
  }

  getRecipesPage(page: number, size: number, groupId: string, search: string) {
    return this.apiService
      .get<any>(`/recipes?page=${page}&size=${size}&groupId=${groupId}&search=${search}`);
  }

  cookRecipe(recipeId: string) {
    return this.apiService
      .patch(`/recipes/${recipeId}/cook`, {});
  }
}

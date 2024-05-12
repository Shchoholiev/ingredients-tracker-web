import { Component } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { RecipeCreateDto } from './recipe-create-dto.model';
import { Router } from '@angular/router';
import { Product } from '../../products/product.model';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent {
  recipe: RecipeCreateDto = new RecipeCreateDto();
  error: string | null = null;

  constructor(
    private recipeService: RecipesService,
    private router: Router
  ) {}

  addRecipe(): void {
    this.recipe.groupId = localStorage.getItem('groupId') || '';
    this.recipeService.addRecipe(this.recipe).subscribe({
      next: (response) => {
        this.error = null;
        this.router.navigate(['/recipe', response.id]);
      },
      error: (error) => {
        this.error = 'Failed to create the recipe.';
        console.error('Error:', error);
      }
    });
  }

  handleFileInput(event: Event): void {
    const element = event.target as HTMLInputElement;
    const file = element.files ? element.files[0] : null;
    if (file) {
        this.recipe.thumbnail = file;
    }
  }

  addIngredients(selectedIngredients: any): void {
    this.recipe.ingredients = selectedIngredients;
  }

  addCategories(categories: any): void {
    this.recipe.categories = categories;
  }
}

import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    Recipes: Recipe[] = [new Recipe('shakshoka', 'beid w salsa','https://www.loveandoliveoil.com/wp-content/uploads/2015/10/shakshuka-360x360.jpg' ),new Recipe('Omlet', 'beid w samna','https://previews.123rf.com/images/jaochainoi/jaochainoi1606/jaochainoi160600050/60577620-omlet.jpg' )];
  constructor() { }

  ngOnInit(): void {
  }

}

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pokedex',
    pathMatch: 'full'
  },
  {
    path: 'pokedex',
    loadChildren: () => import('./page/pokedex/pokedex.module').then( m => m.PokedexPageModule)
  },
  {
    path: 'pokedex/:name',
    loadChildren: () => import('./page/pokemon-details/pokemon-details.module').then( m => m.PokemonDetailsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

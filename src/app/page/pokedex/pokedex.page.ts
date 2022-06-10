import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.page.html',
  styleUrls: ['./pokedex.page.scss'],
})
export class PokedexPage implements OnInit {
  pokemons = [];
  search ='';
  offsetValue=0;

  constructor(
    private pokedexService: PokedexService,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    this.loadPokemon();
  }

  async loadPokemon(event?){
    const loading = await this.loadingCtrl.create({
      message: 'Loading..',
      spinner: 'bubbles',
    });

    await loading.present;

    this.pokedexService.getPokemons(this.offsetValue).subscribe((res) => {
      loading.dismiss;
      this.pokemons.push(...res.results);
      event?.target.complete();
      if(event){
        event.target.disabled = res.next === null;
      }
    });

  }

  filteredPokemon() {
    return this.pokemons.filter((pokemon) =>pokemon.name.match(this.search));
  }

  loadMore(event: InfiniteScrollCustomEvent) {
    this.offsetValue+=20;
    this.loadPokemon(event);
  }

}

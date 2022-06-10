import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.page.html',
  styleUrls: ['./pokemon-details.page.scss'],
})
export class PokemonDetailsPage implements OnInit {

  pokemon = null;

  constructor(
    private router: ActivatedRoute,
    private pokedexService: PokedexService
  ) { }

  ngOnInit() {
    const name = this.router.snapshot.paramMap.get('name');
    this.pokedexService.getPokemonsDetails(name).subscribe((res)=>{
      this.pokemon =res;
    });
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokemonDetailsPageRoutingModule } from './pokemon-details-routing.module';

import { PokemonDetailsPage } from './pokemon-details.page';
import { BadgeComponent } from 'src/app/component/badge/badge.component';
import { StatComponent } from 'src/app/component/stat/stat.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokemonDetailsPageRoutingModule
  ],
  declarations: [PokemonDetailsPage,BadgeComponent,StatComponent]
})
export class PokemonDetailsPageModule {}

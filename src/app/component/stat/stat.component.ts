import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.scss'],
})
export class StatComponent implements OnInit {
  @Input() data: any[];

  constructor() { }

  ngOnInit() {}

  getColor(pokemonStat: string) {
    switch (pokemonStat) {
      case 'hp':
        return 'success';
      case 'attack':
        return  'danger';
      case 'defense':
        return 'dark';
      case 'special-attack':
        return 'medium';
      case 'special-defense':
        return 'tertiary';
      case 'speed':
        return 'warning';
      default:
        return 'primary';
    }
  }

}

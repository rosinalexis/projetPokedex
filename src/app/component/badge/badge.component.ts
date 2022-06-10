import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
})
export class BadgeComponent implements OnInit {
 @Input() data: any[];

  constructor() {}

  ngOnInit() {
  }

  getColor(pokemonTypeName: string) {
    switch (pokemonTypeName) {
      case 'poison':
        return 'tertiary';
      case 'grass':
        return 'success';
      case 'fire':
        return 'danger';
      case 'flying':
        return 'warning';
      case 'warter':
        return 'primary';
      case 'bug':
        return 'medium';
      case 'normal':
        return 'dark';
      default:
        return 'primary';
    }
  }
}

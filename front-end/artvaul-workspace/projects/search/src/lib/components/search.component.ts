import { Component, inject } from '@angular/core';
import { SearchStore } from '../services/search.store';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'lib-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <input type="text" [(ngModel)]="item.value" />
    <button (click)="search()">Rechercher</button>
  `,
  styles: ``,
})
export class SearchComponent {
  item = {
    value: '',
  };

  private readonly store = inject(SearchStore);

  search(): void {
    this.store.setNewValue({
      item: this.item.value,
    });
  }
}

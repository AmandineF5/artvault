import { Component, inject } from '@angular/core';
import { GetAllArtApplication } from '../../services/art.application';
import { CommonModule } from '@angular/common';
import { SearchStore } from 'search';

@Component({
  selector: 'lib-art-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './art-items.component.html',
  styleUrl: './art-items.component.css',
})
export class ArtItemsComponent {
  arts$ = inject(GetAllArtApplication).getAll();
  store = inject(SearchStore).storeSignal;
}

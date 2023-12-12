import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ArtItemsComponent } from '../../components/art-items/art-items.component';

@Component({
  selector: 'lib-art-list',
  standalone: true,
  imports: [CommonModule, ArtItemsComponent],
  templateUrl: './art-list.component.html',
  styleUrl: './art-list.component.css'
})
export class ArtListComponent {

}

import { Injectable, signal } from '@angular/core';
import { SearchState, initialSearchState } from '../models';

@Injectable({
  providedIn: 'root',
})
export class SearchStore {
  storeSignal = signal<SearchState>(initialSearchState);

  setNewValue(newState: SearchState): void {
    this.storeSignal.set({ ...newState });
  }
}

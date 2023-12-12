import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Arts } from '../models';

export interface GetAllArt {
  getAll(): Observable<Arts>;
}

export const inMemoryGetAllArt: GetAllArt = {
  getAll: () => {
    const arts: Arts = [
      {
        id: 1,
        title: 'eyes work',
        creationDate: new Date(),
        description: '',
        type: 'charcoal-drawing',
      },
      {
        id: 2,
        title: 'mouthes work',
        creationDate: new Date(),
        description: '',
        type: 'charcoal-drawing',
      },
    ];
    return of(arts);
  },
};

export const mockingFactory = () => inMemoryGetAllArt;

@Injectable({ providedIn: 'root', useFactory: mockingFactory })
export class GetAllArtInfrastructure implements GetAllArt {
  getAll(): Observable<Arts> {
    throw new Error('Method not implemented.');
  }
}

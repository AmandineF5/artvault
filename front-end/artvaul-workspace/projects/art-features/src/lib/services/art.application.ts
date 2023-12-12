import { Observable, shareReplay } from 'rxjs';
import { Arts } from '../models';
import { GetAllArt, GetAllArtInfrastructure } from './art.infrastructure';
import { Injectable, inject } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GetAllArtApplication implements GetAllArt {
  private readonly api = inject(GetAllArtInfrastructure);
  private getAllArt$ = this.api.getAll().pipe(shareReplay(1));

  getAll(): Observable<Arts> {
    return this.getAllArt$;
  }
}

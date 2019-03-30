import { Injectable } from '@angular/core';
import { PartyInfo } from '../models/party-info';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartiesService {
  constructor() {}

  getParties(): Observable<PartyInfo[]> {
    return of([
      {
        logo: 'https://picsum.photos/200/300/?random',
        name: 'Smer'
      },
      {
        logo: 'https://picsum.photos/200/300/?random',
        name: 'SaS'
      },
      {
        logo: 'https://picsum.photos/200/300/?random',
        name: 'KDH'
      },
      {
        logo: 'https://picsum.photos/200/300/?random',
        name: 'Oľano'
      }
    ]);
  }
}

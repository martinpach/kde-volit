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
        logo: '/assets/smer-logo.png',
        name: 'Smer'
      },
      {
        logo: '/assets/sas-logo.png',
        name: 'SaS'
      },
      {
        logo: '/assets/kdh-logo.jpg',
        name: 'KDH'
      },
      {
        logo: '/assets/olano-logo.png',
        name: 'Oľano'
      }
    ]);
  }
}

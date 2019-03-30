import { Injectable } from '@angular/core';
import { CandidateInfo } from '../models/candidate-info';
import { of, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CandidatesService {
  candidates$ = of([
    {
      firstName: 'Robert',
      lastName: 'Fico',
      photo: 'https://picsum.photos/200/300/?random',
      description: 'Lorem ipsum..',
      party: 'Smer'
    },
    {
      firstName: 'Robert',
      lastName: 'Fico',
      photo: 'https://picsum.photos/200/300/?random',
      description: 'Lorem ipsum..',
      party: 'SaS'
    },
    { firstName: 'Robert', lastName: 'Fico', photo: 'https://picsum.photos/200/300/?random', description: 'Lorem ipsum..', party: 'Smer' }
  ]);

  constructor() {}

  getCandidatesByPartyName(partyName: string): Observable<CandidateInfo[]> {
    return this.candidates$;
  }
}

import { Injectable } from '@angular/core';
import { CandidateInfo } from '../models/candidate-info';
import { of, Observable } from 'rxjs';
import { filter, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CandidatesService {
  candidates$ = of([
    {
      firstName: 'Eugen',
      lastName: 'Jurzyca',
      photo: 'https://pbs.twimg.com/profile_images/576475036053172224/8q9k24TP.jpeg',
      description: `
      Ing., 61 r., poslanec NR SR, Bratislava <br /> <br />
      Súčasný poslanec Národnej rady Slovenskej republiky
      - Momentálne v úrade od roku 2016
      14. minister školstva Slovenska
      - V úrade: 9. júla 2010 – 4. apríla 2012
      Biografické údaje
      Narodenie: 9. február 1958 (61 rokov)
      Politická strana:
      SDKÚ–DS (do 2014)
      Sloboda a Solidarita
      (kandiduje ako nečlen, 2016)
      Alma mater: Vysoká škola ekonomická v Bratislave
      `,
      party: 'SaS'
    },
    {
      firstName: 'Alojz',
      lastName: 'Baránik',
      photo: 'https://u.smedata.sk/blog/photo//8/15/15268/alojz-baranik73642395_0.jpeg?r=27bp',
      description: `
      JUDr., 64 r., poslanec NR SR, Bratislava <br /> <br />
      Súčasný poslanec Národnej rady Slovenskej republiky
      Momentálne v úrade od roku 2016
      Biografické údaje:
      Narodenie: 13. jún 1954 (64 rokov)
      Politická strana: SaS
      Alma mater: Právnická fakulta Univerzity Komenského (JUDr.)
      Profesia právnik
      `,
      party: 'SaS'
    },
    {
      firstName: 'Lucia',
      lastName: 'Ďuriš Nicholsonová',
      photo: 'https://ocdn.eu/images/pulscms/ZDk7MDA_/05ebca72709fe9c5c764dc8840457051.jpeg',
      description: `
      42 r., poslankyňa NR SR, Bratislava <br /> <br />
      Súčasná poslankyňa a podpredsedkyňa NR SR
      Momentálne v úrade od roku 2016
      Bývalá štátna tajomníčka Ministerstva práce, sociálnych vecí a rodiny SR
      V úrade od 8. júla 2010 – 4. apríla 2012
      Biografické údaje:
      Narodenie: 28. november 1976 (42 rokov)
      Bratislava, ČSSR

      Politická strana: SaS (od 2009)
      Alma mater: Gymnázium Metodova,
      English School for Immigrants Ottawa
      `,
      party: 'SaS'
    }
  ]);

  constructor() {}

  getCandidatesByPartyName(partyName: string): Observable<CandidateInfo[]> {
    return this.candidates$.pipe(map(candidates => candidates.filter(candidate => candidate.party === partyName)));
  }
}

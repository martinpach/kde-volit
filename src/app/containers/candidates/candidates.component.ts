import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CandidateInfo } from '../../models/candidate-info';
import { Observable } from 'rxjs';
import { CandidatesService } from '../../services/candidates.service';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.scss']
})
export class CandidatesComponent implements OnInit {
  party: string;
  candidates$: Observable<CandidateInfo[]>;
  constructor(private route: ActivatedRoute, private candidatesService: CandidatesService) {
    this.party = route.snapshot.params['id'];
    this.candidates$ = this.candidatesService.getCandidatesByPartyName(this.party);
  }

  ngOnInit() {}
}

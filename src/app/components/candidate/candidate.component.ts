import { Component, OnInit, Input } from '@angular/core';
import { CandidateInfo } from '../../models/candidate-info';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss']
})
export class CandidateComponent implements OnInit {
  @Input() candidate: CandidateInfo;

  constructor() {}

  ngOnInit() {}
}

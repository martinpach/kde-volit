import { Component, OnInit, Input } from '@angular/core';
import { PartyInfo } from '../../models/party-info';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.scss']
})
export class PartyComponent implements OnInit {
  @Input() party: PartyInfo;

  constructor() {}

  ngOnInit() {}
}

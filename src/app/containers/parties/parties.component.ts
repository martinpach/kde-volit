import { Component, OnInit } from '@angular/core';
import { PartiesService } from '../../services/parties.service';
import { Observable } from 'rxjs';
import { PartyInfo } from '../../models/party-info';

@Component({
  selector: 'app-parties',
  templateUrl: './parties.component.html',
  styleUrls: ['./parties.component.scss']
})
export class PartiesComponent implements OnInit {
  parties$: Observable<PartyInfo[]>;

  constructor(partiesService: PartiesService) {
    this.parties$ = partiesService.getParties();
  }

  ngOnInit() {}
}

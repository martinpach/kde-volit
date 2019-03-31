import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-voting-place',
  templateUrl: './voting-place.component.html',
  styleUrls: ['./voting-place.component.scss']
})
export class VotingPlaceComponent implements OnInit {
  place: string;

  constructor(private route: ActivatedRoute) {
    this.place = route.snapshot.params['id'];
  }

  ngOnInit() {}
}

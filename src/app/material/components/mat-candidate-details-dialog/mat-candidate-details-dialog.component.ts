import { Component, OnInit, Inject } from '@angular/core';
import { CandidateInfo } from '../../../models/candidate-info';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-mat-candidate-details-dialog',
  templateUrl: './mat-candidate-details-dialog.component.html',
  styleUrls: ['./mat-candidate-details-dialog.component.scss']
})
export class MatCandidateDetailsDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { candidate: CandidateInfo }) {}

  ngOnInit() {}
}

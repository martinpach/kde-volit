import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CandidateInfo } from '../../models/candidate-info';
import { MatCandidateDetailsDialogComponent } from '../components/mat-candidate-details-dialog/mat-candidate-details-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  constructor(private dialog: MatDialog) {}

  openCandidateDetailsDialog(candidate: CandidateInfo) {
    return this.dialog.open(MatCandidateDetailsDialogComponent, {
      width: '980px',
      maxWidth: '980px',
      data: {
        candidate
      }
    });
  }
}

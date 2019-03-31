import { NgModule } from '@angular/core';
import { MatButtonModule, MatAutocompleteModule, MatInputModule, MatDialogModule, MatIconModule } from '@angular/material';
import { MatCandidateDetailsDialogComponent } from './components/mat-candidate-details-dialog/mat-candidate-details-dialog.component';

@NgModule({
  imports: [MatDialogModule, MatIconModule, MatButtonModule],
  exports: [MatButtonModule, MatAutocompleteModule, MatInputModule],
  declarations: [MatCandidateDetailsDialogComponent],
  entryComponents: [MatCandidateDetailsDialogComponent]
})
export class MaterialModule {}

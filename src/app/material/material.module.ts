import { NgModule } from '@angular/core';
import { MatButtonModule, MatAutocompleteModule, MatInputModule } from '@angular/material';

@NgModule({
  exports: [MatButtonModule, MatAutocompleteModule, MatInputModule]
})
export class MaterialModule {}

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';
import { DatabaseService } from '../../services/database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  @ViewChild('addressInput') addressInput: ElementRef;

  showAddress = false;
  myControl = new FormControl();
  options: string[] = [];
  filteredOptions: Observable<string[]>;
  dataset;

  constructor(private db: DatabaseService, private router: Router) {
    this.db.getAllPlaces().subscribe(data => {
      this.dataset = data;
    });
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this.elastic(value))
    );
  }

  setAddressVisible() {
    this.showAddress = true;
    this.addressInput.nativeElement.focus();
  }

  elastic(value) {
    this.options = [];
    var val = value;

    for (var x in this.dataset) {
      if (this.dataset[x].address.toLowerCase().indexOf(val.toLowerCase()) >= 0) {
        this.options = [...this.options, this.dataset[x].address];
      }
    }
    return this.options;
  }

  onSubmit(f: NgForm) {
    const { place } = this.dataset.find(({ address }) => address === this.myControl.value) || { place: null };
    if (!place) return;
    this.router.navigate(['voting-place'], { queryParams: { place } });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}

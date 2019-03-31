import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  showAddress = false;
  myControl = new FormControl();
  options: string[] = [];
  filteredOptions: Observable<string[]>;
  dataset;

  constructor(private db:DatabaseService) {
    this.db.getData().subscribe( data => {
      this.dataset = data;
    });
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this.elastic(value))
      );
  }

  setAddressVisible() {
    this.showAddress = true;
  }

  elastic(value) {
    this.options = [];
    var val = value;

    for ( var x in this.dataset) {
      if (this.dataset[x].address.indexOf(val) >= 0) {
        this.options = [...this.options, this.dataset[x].address];
      }
    }   
    return this.options; 
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}

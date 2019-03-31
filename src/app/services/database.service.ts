import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private db:AngularFireDatabase) { }

  getData() {
  	// console.log(this.db.list('volby'));
  	return this.db.list('volby').valueChanges();
  }

}

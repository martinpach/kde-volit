import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  constructor(private db: AngularFireDatabase) {}

  getData() {
    return this.db.list('volby').valueChanges();
  }
}

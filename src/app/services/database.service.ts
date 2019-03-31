import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  constructor(private db: AngularFireDatabase) {}

  getAllPlaces() {
    return this.db.list('miestnosti').valueChanges();
  }
}

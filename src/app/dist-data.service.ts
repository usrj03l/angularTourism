import { Injectable } from '@angular/core';
import { database } from 'src/assets/data/data';

@Injectable({
  providedIn: 'root'
})
export class DistDataService {

  constructor() {
  }
  getData() {
    return database;
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchKey = new BehaviorSubject<string>('');
  constructor() { }
}

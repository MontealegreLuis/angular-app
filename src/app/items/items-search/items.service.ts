import {Injectable} from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';

const BASE_URL = 'http://localhost:3000/items/';

@Injectable()
export class ItemsService {
  constructor(private http: Http) {
  }

  search(term: string) {
    const search = new URLSearchParams();
    search.set('q', term);

    return this.http.get(BASE_URL, {search})
      .map(response => response.json());
  }
}

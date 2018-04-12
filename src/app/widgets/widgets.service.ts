import {Injectable} from '@angular/core';
import {Widget} from './widget.model';
import {Headers, Http} from '@angular/http';

const BASE_URL = 'http://localhost:3000/widgets/';
const HEADER = {headers: new Headers({'Content-Type': 'application/json'})};

@Injectable()
export class WidgetsService {
  constructor(private http: Http) {
  }

  all() {
    return this.http.get(BASE_URL).map(response => response.json());
  }

  load(id: number) {
    return this.http.get(`${BASE_URL}${id}`).map(response => response.json());
  }

  create(widget: Widget) {
    return this.http.post(BASE_URL, JSON.stringify(widget), HEADER).map(response => response.json());
  }

  update(widget: Widget) {
    return this
      .http
      .patch(`${BASE_URL}${widget.id}`, JSON.stringify(widget), HEADER)
      .map(response => response.json());
  }

  delete(widget: Widget) {
    return this.http.delete(`${BASE_URL}${widget.id}`).map(response => response.json());
  }
}

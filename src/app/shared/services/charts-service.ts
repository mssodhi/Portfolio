import { Http } from '@angular/http';
import { Injectable } from "@angular/core";
import 'rxjs/Rx';

@Injectable()
export class ChartsService {

  constructor(private http: Http) { }

  fetchCharts() {
    return this.http
      .get('http://localhost:8080/soundbox/api/charts/')
      .map(res => res.json());
  }
}

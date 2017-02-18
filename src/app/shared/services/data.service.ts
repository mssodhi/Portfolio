import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

import { environment } from '../../../environments/environment';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  getProjects() {
    return this.http
      .get(`${environment.server}/portfolio/projects`)
      .map(res => res.json());
  };

  getCourses() {
    return this.http
      .get(`${environment.server}/portfolio/courses`)
      .map(res => res.json());
  }
}

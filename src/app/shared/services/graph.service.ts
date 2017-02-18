import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

import { environment } from '../../../environments/environment';

@Injectable()
export class GraphService {

  constructor(private http: Http) { }

  queryGraph() {
    return this.http
      .get(`${environment.server}/graph`)
      .map(res => res.json());
  }
}

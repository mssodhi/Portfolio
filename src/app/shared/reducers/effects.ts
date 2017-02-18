import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/switchMap'

import { ACTION } from '../constants';
import { environment } from '../../../environments/environment';

@Injectable()
export class Effects {
  // projects
  @Effect() loadProjects$ = this.actions$
    .ofType(ACTION.LOAD_PROJECTS)
    .switchMap(() =>
      this.http.get(`${environment.server}/portfolio/projects`)
        .map(res => ({ type: ACTION.LOAD_PROJECTS_COMPLETED, payload: res.json() }))
    );

  // courses
  @Effect() loadCourses$ = this.actions$
    .ofType(ACTION.LOAD_PROJECTS)
    .switchMap(() =>
      this.http.get(`${environment.server}/portfolio/courses`)
        .map(res => ({ type: ACTION.LOAD_COURSES_COMPLETED, payload: res.json() }))
    );

  constructor (
    private store: Store<any>,
    private http: Http,
    private actions$: Actions
  ) { }

}

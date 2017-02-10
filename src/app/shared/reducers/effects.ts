import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/switchMap'

import { ACTION } from '../constants';


@Injectable()
export class Effects {
  // profile
  @Effect() loadProjects$ = this.actions$
    .ofType(ACTION.LOAD_PROJECTS)
    .switchMap(() =>
      this.http.get('assets/data/projects/projects.json')
        .map(res => ({ type: ACTION.LOAD_PROJECTS_COMPLETED, payload: res.json() }))
    );

  constructor (
    private store: Store<any>,
    private http: Http,
    private actions$: Actions
  ) { }

}

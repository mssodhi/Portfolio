import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import 'rxjs/add/operator/switchMap'

import { ACTION } from '../../shared';
import { DataService } from '../services'

@Injectable()
export class Effects {

  @Effect() loadProjects$ = this.actions$
    .ofType(ACTION.LOAD_PROJECTS)
    .switchMap(() =>
      this.dataService.getProjects()
        .map(res => ({ type: ACTION.LOAD_PROJECTS_COMPLETED, payload: res }))
    );

  @Effect() loadCourses$ = this.actions$
    .ofType(ACTION.LOAD_COURSES)
    .switchMap(() =>
      this.dataService.getCourses()
        .map(res => ({ type: ACTION.LOAD_COURSES_COMPLETED, payload: res }))
    );

  constructor (private actions$: Actions, private dataService: DataService) { }

}

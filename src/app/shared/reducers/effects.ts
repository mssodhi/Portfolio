import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/switchMap'

import { ACTION } from '../constants';
import { ProfileService } from '../services';

@Injectable()
export class Effects {
  // profile
  @Effect() loadProfile$ = this.actions$
    .ofType(ACTION.LOAD_PROFILE)
    .switchMap(() =>
      this.profileService.fetchProfile()
        .map(res => ({ type: ACTION.LOAD_PROFILE_COMPLETED, payload: res }))
    );

  constructor (
    private store: Store<any>,
    private actions$: Actions,
    private profileService: ProfileService
  ) { }

}

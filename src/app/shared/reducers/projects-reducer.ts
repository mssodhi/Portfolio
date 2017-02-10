import { ActionReducer, Action } from '@ngrx/store';

import { ACTION, STATUS } from '../constants';

const INIT_STATE = {
  projects: null,
  status: null
};

export const PROJECTS_REDUCER: ActionReducer<any> = (state = INIT_STATE, action: Action) => {
  switch (action.type) {
    case ACTION.LOAD_PROJECTS:
      return Object.assign({}, INIT_STATE, { status: STATUS.IN_PROGRESS });

    case ACTION.LOAD_PROJECTS_COMPLETED:
      return Object.assign({}, state, { projects: action.payload, status: STATUS.COMPLETED });

    default:
      return state;
  }
};

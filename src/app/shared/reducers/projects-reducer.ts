import { ActionReducer, Action } from '@ngrx/store';

import { ACTION, STATUS } from '../constants';

const INIT_STATE = {
  selectedProject: null,
  projects: null,
  status: null
};

export const PROJECTS_REDUCER: ActionReducer<any> = (state = INIT_STATE, action: Action) => {
  switch (action.type) {

    case ACTION.SELECT_PROJECT:
      return Object.assign({}, state, { selectedProject: action.payload, status: STATUS.COMPLETED });

    case ACTION.LOAD_PROJECTS:
      return Object.assign({}, INIT_STATE, { status: STATUS.IN_PROGRESS });

    case ACTION.LOAD_PROJECTS_COMPLETED:
      return Object.assign({}, state, { projects: action.payload, status: STATUS.COMPLETED });

    default:
      return state;
  }
};

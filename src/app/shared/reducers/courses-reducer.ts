import { ActionReducer, Action } from '@ngrx/store';

import { ACTION, STATUS } from '../constants';

const INIT_STATE = {
  courses: null,
  status: null
};

export const COURSES_REDUCER: ActionReducer<any> = (state = INIT_STATE, action: Action) => {
  switch (action.type) {

    case ACTION.LOAD_COURSES:
      return Object.assign({}, INIT_STATE, { status: STATUS.IN_PROGRESS });

    case ACTION.LOAD_COURSES_COMPLETED:
      return Object.assign({}, state, { courses: action.payload, status: STATUS.COMPLETED });

    default:
      return state;
  }
};

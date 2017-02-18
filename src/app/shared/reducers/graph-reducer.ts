import { ActionReducer, Action } from '@ngrx/store';

import { ACTION, STATUS } from '../constants';

const INIT_STATE = {
  data: null,
  status: null
};

export const GRAPH_REDUCER: ActionReducer<any> = (state = INIT_STATE, action: Action) => {
  switch (action.type) {

    case ACTION.LOAD_GRAPH:
      return Object.assign({}, INIT_STATE, { status: STATUS.IN_PROGRESS });

    case ACTION.LOAD_GRAPH_COMPLETED:
      return Object.assign({}, state, { data: action.payload, status: STATUS.COMPLETED });

    default:
      return state;
  }
};

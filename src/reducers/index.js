import actions from '../actions';

function selectedReducer(state = {}, action) {
  switch (action.type) {
    case actions.UPDATE_SELECTED:
      return {...state, ...action.data};
    default:
      return state;
  }
}

function dataReducer(state = {}, action) {
  switch (action.type) {
    case actions.ADD_DATA:
      return action.data;
    case actions.UPDATE_DATA:
      return action.data;
    default:
      return state;
  }
}

function pageReducer(state = {}, action) {
  switch (action.type) {
    case actions.NEXT_PAGE:
      return action.data;
    default:
      return state;
  }
}

export default {
  selected: selectedReducer,
  data: dataReducer,
  page: pageReducer
};
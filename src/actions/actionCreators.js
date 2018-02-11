import actions from './index';

export const updateSelected = payload => (
  {
    type: actions.UPDATE_SELECTED,
    data: payload
  }
);

export const nextPage = payload => (
  {
    type: actions.NEXT_PAGE,
    data: payload
  }
);

export const addData = payload => (
  {
    type: actions.ADD_DATA,
    data: payload
  }
);

export const updateData = payload => (
  {
    type: actions.UPDATE_DATA,
    data: payload
  }
);
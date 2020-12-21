// action types
export const CURRUNT_PAGE = 'currentPage';
export const ADD_MARKE = 'noteAdded';
export const ADD_MARGIN = 'marginAdded';

// action reducer
export const updateCurrentPage = (update) => ({
  type: CURRUNT_PAGE,
  payload: update,
});

export const addNote = (marke) => ({
  type: ADD_MARKE,
  payload: marke,
});

export const addMargin = (data) => ({
  type: ADD_MARGIN,
  payload: data,
});

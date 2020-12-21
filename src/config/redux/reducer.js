import * as actions from './actions';
import {combineReducers} from 'redux';
const Pages_Num = 607;

const currentPageReducer = (state = 605, action) => {
  return action.type === actions.CURRUNT_PAGE ? action.payload : state;
};

const markerReducer = (state = -1, action) => {
  return action.type === actions.ADD_MARKE ? action.payload : state;
};

const margilizationReducer = (state = {}, action) => {
  return action.type === actions.ADD_MARGIN
    ? {...state, ...action.payload}
    : state;
};

const reducer = combineReducers({
  currentPage: currentPageReducer,
  marker: markerReducer,
  margilization: margilizationReducer,
});

export default reducer;

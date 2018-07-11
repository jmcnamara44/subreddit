import { combineReducers } from 'redux';
import postListReducer from './post-list-reducer';
import selectedTicketReducer from './selected-post-reducer';

const rootReducer = combineReducers({
  masterPostList: postListReducer,
  selectedTicket: selectedTicketReducer
});

export default rootReducer;

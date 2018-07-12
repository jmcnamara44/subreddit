import c from './../constants';

export default (state = {}, action) => {
  switch (action.type) {
  case c.SELECTED_POST:
    return action.postId;
  default:
    return state;
  }
};

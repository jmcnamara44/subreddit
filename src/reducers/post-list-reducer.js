import c from './../constants';

export default (state = {}, action) => {
  let newState;
  const { title, message, user, timeStamp, id, points } = action;
  switch (action.type) {
  case c.ADD_POST:
    newState = Object.assign({}, state, {
      [id]: {
        title: title,
        message: message,
        user: user,
        timeStamp: timeStamp,
        id: id,
        points: points
      }
    });
    return newState;

  case c.UPVOTE_POST:
    const newPost = Object.assign({}, state[id], {points});
    newState = Object.assign({}, state, {
      [id]: newPost
    });
    return newState;

    // case ''
  default:
    return state;
  }
};

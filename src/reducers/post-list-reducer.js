export default (state = {}, action) => {
  let newState;
  const { title, message, user, timeStamp, id } = action;
  switch (action.type) {
    case 'ADD_POST':
    newState = Object.assign({}, state, {
      [id]: {
        title: title,
        message: message,
        user: user,
        timeStamp: timeStamp,
        id: id
      }
    });
    console.log(newState);
    return newState;
  default:
    return state;
  }
}

import React from 'react';
import PropTypes from 'prop-types';
import c from './../constants';
import { connect } from 'react-redux';

function Post(props){

  const handleUpvoting = (postId) => {
    const { dispatch } = props;
    const post = props.postList[postId];
    const newPointAmount = post.points + 1;
    const action = {
      type: c.UPVOTE_POST,
      id: postId,
      points: newPointAmount
    };
    dispatch(action);
  };

  const handleDownvoting = (postId) => {
    const { dispatch } = props;
    const post = props.postList[postId];
    const newPointAmount = post.points - 1;
    const action = {
      type: c.UPVOTE_POST,
      id: postId,
      points: newPointAmount
    };
    dispatch(action);
  };

  var message = {
    borderStyle: 'solid'
  };
  return (
    <div>
      <p>TITLE: {props.title}</p>
      <p style={message}>MESSAGE: {props.message}</p>
      <p>DATE POSTED: {props.timeStamp.toDateString()}</p>
      <p>POSTED BY: {props.user}</p>
      <p>Points: {props.points}</p>
      <button onClick={() => {handleUpvoting(props.id);}}>Upvote</button>
      <button onClick={() => {handleDownvoting(props.id);}}>Downvote</button>
    </div>
  );
}

Post.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  timeStamp: PropTypes.instanceOf(Date),
  user: PropTypes.string,
  points: PropTypes.number,
  id: PropTypes.string,
  postList: PropTypes.object
};

export default connect()(Post);

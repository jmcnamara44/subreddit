import React from 'react';
import PropTypes from 'prop-types';

function Post(props){
  console.log(props);
  return (
    <div>
      <p>TITLE: {props.title}</p>
      <p>MESSAGE: {props.message}</p>
      <p>TIME POSTED: {props.timeStamp.toDateString()}</p>
      <p>POSTED BY: {props.user}</p>
    </div>
  );
}

Post.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  timeStamp: PropTypes.instanceOf(Date),
  user: PropTypes.string
};

export default Post;

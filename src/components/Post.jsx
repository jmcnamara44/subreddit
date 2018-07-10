import React from 'react';
import PropTypes from 'prop-types';

function Post(props){
  return (
    <div>
      <p>{props.title}</p>
      <p>{props.message}</p>
      <p>{props.timeStamp}</p>
      <p>{props.user}</p>
    </div>
  );
}

Post.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  timeStamp: PropTypes.string,
  user: PropTypes.string
};

export default Post;

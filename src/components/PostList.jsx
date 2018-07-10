import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

function PostList(props){
  return (
    <div>
      {Object.keys(props.postList).map(function(postId) {
        var post = props.postList[postId];
        return <Post title={post.title}
        message={post.message}
        timeStamp={post.timeStamp}
        user={post.user}
        id={postId}
        key={postId} />
      })}
    </div>
  );
}

PostList.propTypes = {
  postList: PropTypes.object,
}

export default PostList;

import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

function PostList(props){
  console.log(props.postList);
  return (
    <div>
      <button>Sort by most popular first</button>
      <button>Sort by newest first</button>
      <h2>Most Recent Posts</h2>
      {Object.keys(props.postList).map(function(postId) {
        var post = props.postList[postId];
        return <Post title={post.title}
          message={post.message}
          timeStamp={post.timeStamp._d}
          user={post.user}
          id={postId}
          key={postId}
          points={post.points}
          postList={props.postList} />;
      })}
    </div>
  );
}

PostList.propTypes = {
  postList: PropTypes.object,
};

export default PostList;

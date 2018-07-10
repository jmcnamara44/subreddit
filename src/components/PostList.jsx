import React from 'react';
import Post from './Post';

function PostList(){
  return (
    <div>
      <Post title='title'
      message='message'
      timeStamp='time'
      user= 'user'/>
    </div>
  );
}

export default PostList;

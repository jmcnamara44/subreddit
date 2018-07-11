import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <h1>Subreddit</h1>
      <Link to='/'>Home</Link>  |  <Link to='/newpost'>Create a new post</Link>
    </div>
  );
}

export default Header;

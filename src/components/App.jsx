import React from 'react';
import Header from './Header';
import PostList from './PostList';
import NewPostForm from './NewPostForm';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={PostList} />
        <Route path='/newpost' component={NewPostForm} />
      </Switch>
    </div>
  );
}

export default App;

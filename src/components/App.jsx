import React from 'react';
import Header from './Header';
import PostList from './PostList';
import NewPostForm from './NewPostForm';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function App(props){
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' render={()=><PostList postList={this.props.masterPostList} />} />
        <Route path='/newpost' component={NewPostForm} />
      </Switch>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    masterPostList: state.masterPostList
  }
}

export default withRouter(connect(mapStateToProps)(App));

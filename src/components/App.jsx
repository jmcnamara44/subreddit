import React from 'react';
import Header from './Header';
import PostList from './PostList';
import NewPostForm from './NewPostForm';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import c from './../constants';
import { v4 } from 'uuid';
import Moment from 'moment';

function App(props){
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' render={()=><PostList postList={props.masterPostList} />} />
        <Route path='/newpost' component={NewPostForm} />
      </Switch>
    </div>
  );
}

App.propTypes = {
  masterPostList: PropTypes.object
};

const mapStateToProps = state => {
  // let randomNumber = Math.random();
  // console.log(props);
  // if (randomNumber > .5) {
  //   // const { dispatch }
  //   const action = {
  //     type: c.ADD_POST,
  //     id: v4(),
  //     title: 'testtitle',
  //     message: 'testmessage',
  //     timeStamp: new Moment(),
  //     user: 'testuser',
  //     points: 0
  //   };
  //   dispatch(action);
  //   return {
  //     masterPostList: state.masterPostList
  //   };
  // } else {
    return {
      masterPostList: state.masterPostList
    };
  // }

};

export default withRouter(connect(mapStateToProps)(App));

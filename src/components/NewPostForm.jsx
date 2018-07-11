import React from 'react';
import { v4 } from 'uuid';
import { connect } from 'react-redux';
import Moment from 'moment';
import c from './../constants';

function NewPostForm(props){
  let _title = null;
  let _message = null;
  let _user = null;

  function handleNewPostFormSubmission(event) {
    const { dispatch } = props;
    event.preventDefault();
    const action = {
      type: c.ADD_POST,
      id: v4(),
      title: _title.value,
      message: _message.value,
      timeStamp: new Moment(),
      user: _user.value,
      points: 0
    };
    dispatch(action);
    _title.value = '';
    _message.value = '';
    _user.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewPostFormSubmission}>
        <input
          type='text'
          id='user'
          placeholder='Who is making this post?'
          ref={(input) => {_user = input;}}/>
        <input
          type='text'
          id='title'
          placeholder='Title'
          ref={(input) => {_title = input;}}/>
        <textarea
          id='message'
          placeholder='Write a post'
          ref={(textarea) => {_message = textarea;}}/>
        <button type='submit'>Post!</button>
      </form>
    </div>
  );
}

export default connect()(NewPostForm);

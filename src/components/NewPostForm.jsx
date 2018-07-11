import React from 'react';
import { v4 } from 'uuid';
import { connect } from 'react-redux';
import Moment from 'moment';

function NewPostForm(props){
  let _title = null;
  let _message = null;

  function handleNewPostFormSubmission(event) {
    const { dispatch } = props;
    event.preventDefault();
    const action = {
      type: 'ADD_POST',
      id: v4(),
      title: _title.value,
      message: _message.value,
      timeStamp: new Moment(),
      user: 'MEEEE'
    };
    dispatch(action);
    _title.value = '';
    _message.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewPostFormSubmission}>
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

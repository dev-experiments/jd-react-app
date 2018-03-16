import RequestService, * as request from 'requestService';

function get(id) {
  return request({
    url:    `/message/${id}`,
    method: 'GET'
  });
}

function create({subject, content}) {
  return request({
    url:    '/message/create',
    method: 'POST',
    data:   {
      subject,
      content
    }
  });
}

const MessageService = {
  get, create //, update, delete, etc. ...
}

export default MessageService;
/*
import React from 'react'
import MessageService from 'services/api/message'

class Message extends React.Component {
  handleSubmit() {
    const {subject, message} = this.state;
    
    MessageService
      .create({subject, message})
      .then((response) => {
        alert(`New Message with id ${response.id} created!`);
      });
  }
  
  // Other stuff...
}
*/
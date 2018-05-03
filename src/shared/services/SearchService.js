import Http from './../utils/Http';

class SearchService {

  getPopularCities() {
    return Http({
      url: `/hotels/getPopularCities/`,
      method: 'POST'
    });
  }

}

export default (new SearchService());
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
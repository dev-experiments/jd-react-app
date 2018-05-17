import axios from 'axios';
import { API } from './../appConstants';
/* const client = axios.create({
  baseURL: API.baseUrl
});
const axoSource = axios.CancelToken.source(); */

class Http {
  constructor(axios) {
    this.client = axios.create({
      baseURL: API.baseUrl
    });
    // this.source = axios.CancelToken.source();

    this.CancelToken = axios.CancelToken;

  }
  get(options) {
    options.method = 'GET';
    options.cancelToken = new this.CancelToken((c) => {
      this.cancel = c;
    });

    return this.client(options)
      .then(this.onSuccess)
      .catch(this.onError);
  }

  post(options) {
    options.method = 'POST';
    options.cancelToken = new this.CancelToken((c) => {
      this.cancel = c;
    });

    return this.client(options)
      .then(this.onSuccess)
      .catch(this.onError);
  }

  cancel(response) {
    this.source.cancel('Operation canceled by the user.');
    if (this.cancel) {
      this.cancel();
    }
  }
  onSuccess(response) {
    console.log('Request Successful!', response);
    return response.data;
  }

  onFailure(error) {
    console.error('Request Failed:', error.config);

    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Data:', error.response.data);
      console.error('Headers:', error.response.headers);

    } else {
      console.error('Error Message:', error.message);
    }

    //return Promise.reject(error.response || error.message);
    return error.response.data;

  }
}
/* const Http = function (options) {

  options.cancelToken = axoSource.token;

  const onSuccess = function (response) {
    console.log('Request Successful!', response);
    return response.data;
  }

  const onError = function (error) {
    console.error('Request Failed:', error.config);

    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Data:', error.response.data);
      console.error('Headers:', error.response.headers);

    } else {
      console.error('Error Message:', error.message);
    }

    //return Promise.reject(error.response || error.message);
    return error.response.data;
  }

  return client(options)
    .then(onSuccess)
    .catch(onError);
}
export default Http; */

export default new Http(axios);
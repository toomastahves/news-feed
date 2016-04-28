import { API_URI } from '../../client/constants/api';

export const fetch = ({ path, type, data }) => {
  const url = `${API_URI}${path}`;
  console.log(`${type} ${url}`);

  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open(type, url);
    req.withCredentials = true;
    req.setRequestHeader('content-type', 'application/json');
    req.onload = function() {
      if(req.status === 200) {
        resolve(JSON.parse(req.response));
      } else {
        console.log('reject 1');
        reject(req.response);
      }
    };
    req.onerror = function() {
      console.log('reject 2');
      reject('Network error');
    };
    req.send();
  });
};

export const delay = (time) => {
  return new Promise(resolve => setTimeout(resolve, time));
};

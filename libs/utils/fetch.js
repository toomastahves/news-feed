import { SERVER_URI } from '../../client/constants/';

export const fetch = ({ path, type, data }) => {
  console.log(`${type} ${SERVER_URI}${path}`);
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open(type, `${SERVER_URI}${path}`);
    req.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    req.onload = function() {
      if(req.status === 200) {
        resolve(JSON.parse(req.response));
      } else {
        reject(JSON.parse(req.response));
      }
    };
    req.onerror = function() {
      reject(JSON.parse({ error: { message: 'Network error' } }));
    };
    req.send(data);
  });
};

export const delay = (time) => {
  return new Promise(resolve => setTimeout(resolve, time));
};

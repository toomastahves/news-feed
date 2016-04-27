import store from '../store/';
import { getArticlesRequest } from '../actions/api';

// http://www.howtocreate.co.uk/tutorials/javascript/browserwindow
const getScrollXY = () => {
  let scrOfX = 0;
  let scrOfY = 0;
  if(document.body && (document.body.scrollLeft || document.body.scrollTop)) {
    scrOfX = document.body.scrollLeft;
    scrOfY = document.body.scrollTop;
  }
  return [scrOfX, scrOfY];
};

// http://james.padolsey.com/javascript/get-document-height-cross-browser/
const getDocHeight = () => {
  const D = document;
  return Math.max(
      D.body.scrollHeight, D.documentElement.scrollHeight,
      D.body.offsetHeight, D.documentElement.offsetHeight,
      D.body.clientHeight, D.documentElement.clientHeight
  );
};

let executed = false;

document.addEventListener('scroll', () => {

  // Checking if user has reached bottom of the page, so we can execute another request.
  if(getDocHeight() <= (getScrollXY()[1] + window.innerHeight)) {

    // Preventing multiple AJAX request in short period of time.
    if(!executed) {
      console.log('bottom');
      const offset = store.getState().apiReducer.articleOffset;
      const section = store.getState().commonReducer.selectedSection;
      store.dispatch(getArticlesRequest(section, offset));
      executed = true;
      setTimeout(() => {
        executed = false;
      }, 500);
    }
  }
});

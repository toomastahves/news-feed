import store from '../store/';
import { getArticlesRequest } from '../actions/api';

let executed = false;

// Infinite scroll feature
window.onscroll = () => {
  // Checking if user has reached bottom of the page, so we can execute another XHR. Works only on 'articles' page.
  if (((window.innerHeight + window.scrollY) >= document.body.scrollHeight) && window.location.href.split('/')[4] === 'articles') {
    if(!executed) {
      executed = true;
      const offset = store.getState().apiReducer.offset;
      const limit = store.getState().apiReducer.limit;
      const section = store.getState().apiReducer.section;
      store.dispatch(getArticlesRequest({ section, offset, limit, clear: false }));
      // Preventing multiple XHR in short period of time.
      setTimeout(() => (executed = false), 1000);
    }
  }
};

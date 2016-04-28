import store from '../store/';
import { getArticlesRequest } from '../actions/api';

let executed = false;

// Infinite scroll feature
window.onscroll = () => {
  // Checking if user has reached bottom of the page, so we can execute another XHR.
  if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
    if(!executed) {
      executed = true;
      const offset = store.getState().apiReducer.articleOffset;
      const limit = store.getState().apiReducer.selectedLimit;
      const section = store.getState().commonReducer.selectedSection;
      store.dispatch(getArticlesRequest(section, offset, limit, false));
      // Preventing multiple XHR in short period of time.
      setTimeout(() => (executed = false), 1000);
    }
  }
};

import store from '../store/';
import { getArticlesRequest } from '../actions/api';

let executed = false;

window.onscroll = function() {
  if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
    if(!executed) {
      console.log('bottom');
      const offset = store.getState().apiReducer.articleOffset;
      const limit = store.getState().apiReducer.selectedLimit;
      const section = store.getState().commonReducer.selectedSection;
      store.dispatch(getArticlesRequest(section, offset, limit, false));
      executed = true;
      setTimeout(() => {
        executed = false;
      }, 500);
    }
  }
};

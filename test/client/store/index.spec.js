import { expect } from 'chai';
import store from 'client/store/';

describe('tests store', () => {
  it('store initial state', () => {
    const initialState = {
      fetching: false,
      content: {}
    };
    const actualState = store.getState().apiReducer;
    expect(actualState).to.eql(initialState);
  });
});

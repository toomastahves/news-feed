import { expect } from 'chai';
import store from 'client/store/';
import { initialState } from 'client/reducers/api';

describe('tests store', () => {
  it('store initial state', () => {
    const actualState = store.getState().apiReducer;
    expect(actualState).to.eql(initialState);
  });
});

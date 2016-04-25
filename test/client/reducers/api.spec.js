import { expect } from 'chai';
import deepFreeze from 'deep-freeze';
import { apiReducer } from 'client/reducers/api';
import { GET_HOME_CONTENT_SUCCESS } from 'client/constants/';

describe('reducers', () => {
  let stateBefore = {};
  beforeEach(() => {
    stateBefore = {
      fetching: true,
      content: {}
    };
  });

  describe('tests helloReducer', () => {
    it('SAY_HELLO', () => {
      const action = {
        type: GET_HOME_CONTENT_SUCCESS,
        content: { message: 'Home content' }
      };
      const stateAfter = {
        fetching: false,
        content: { message: 'Home content' }
      };
      deepFreeze(action);
      deepFreeze(stateBefore);
      expect(apiReducer(stateBefore, action)).to.eql(stateAfter);
    });
  });

});

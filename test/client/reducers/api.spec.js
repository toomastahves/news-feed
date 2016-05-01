import { expect } from 'chai';
import deepFreeze from 'deep-freeze';
import { apiReducer } from 'client/reducers/api';
import { CHANGE_SECTION } from 'client/constants/api';
import { initialState } from 'client/reducers/api';

describe('reducers', () => {
  let stateBefore = {};
  beforeEach(() => {
    stateBefore = initialState;
  });

  describe('tests helloReducer', () => {
    it('CHANGE_SECTION', () => {
      const action = {
        type: CHANGE_SECTION,
        section: 42
      };
      const stateAfter = Object.assign(stateBefore, { section: 42 });
      deepFreeze(action);
      deepFreeze(stateBefore);
      expect(apiReducer(stateBefore, action)).to.eql(stateAfter);
    });
  });

});

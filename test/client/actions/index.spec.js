import { expect } from 'chai';
import { getHomeSuccess } from 'client/actions/';
import { GET_HOME_CONTENT_SUCCESS } from 'client/constants/';

describe('testing action', () => {
  it('getHomeSuccess', () => {
    const content = { content: 'Home content' };
    const expectedAction = {
      type: GET_HOME_CONTENT_SUCCESS,
      content
    };
    expect(getHomeSuccess(content)).to.eql(expectedAction);
  });

});

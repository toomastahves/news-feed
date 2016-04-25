import { expect } from 'chai';
import { GET_HOME_CONTENT_SUCCESS } from 'client/constants/';

describe('constant test', () => {
  it('exports GET_HOME_CONTENT_SUCCESS', () => {
    expect(GET_HOME_CONTENT_SUCCESS).to.equal('GET_HOME_CONTENT_SUCCESS');
  });
});

import { expect } from 'chai';
import { CHANGE_SECTION } from 'client/constants/api';

describe('constant test', () => {
  it('exports CHANGE_SECTION', () => {
    expect(CHANGE_SECTION).to.equal('CHANGE_SECTION');
  });
});

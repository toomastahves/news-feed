import { expect } from 'chai';
import { selectSection } from 'client/actions/api';
import { CHANGE_SECTION } from 'client/constants/api';

describe('testing action', () => {
  it('selectSection', () => {
    const section = 42;
    const expectedAction = {
      type: CHANGE_SECTION,
      section
    };
    expect(selectSection(section)).to.eql(expectedAction);
  });

});

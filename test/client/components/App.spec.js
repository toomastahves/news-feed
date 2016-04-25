import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { App } from 'client/components/App';

const setup = () => {
  const renderer = TestUtils.createRenderer();
  renderer.render(<App />);
  const output = renderer.getRenderOutput();
  return { output };
};


describe('tests App component', () => {
  it('renders correctly', () => {
    const { output } = setup();
    expect(output.type).to.eql('div');
  });
});

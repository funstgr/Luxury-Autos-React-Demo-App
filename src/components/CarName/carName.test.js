import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import CarName from './index';


const setup = (propOverrides) => {
  const renderer = createRenderer();
  renderer.render(<CarName />);
  const output = renderer.getRenderOutput();
  return output;
};

const output = setup();

describe('components', () => {
  describe('CarName', () => {
    it('should render and have <h4>', () => {
      expect(output.type).toBe('h4');
      expect(output.props.children).toBe('testName');
    });
  });
});

import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import SelectorLabel from './index';


const setup = (propOverrides) => {
  const renderer = createRenderer();
  renderer.render(<SelectorLabel />);
  const output = renderer.getRenderOutput();
  return output;
};

describe('components', () => {
  describe('SelectorLabel', () => {
    it('should render <span> and have class app-container', () => {
      const output = setup();
      expect(output.type).toBe('span');
      expect(output.props.children).toBe('Sort cars by: ');
    });
  });
});

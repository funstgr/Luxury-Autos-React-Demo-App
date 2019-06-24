import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import CarListHeader from './index';

const setup = (propOverrides) => {
  const renderer = createRenderer();
  renderer.render(<CarListHeader />);
  const output = renderer.getRenderOutput();
  return output;
};

const output = setup();

describe('components', () => {
  describe('CarListHeader container element is a div', () => {
    it('should render and be type <h5>', () => {
      expect(output.type).toBe('h5');
      expect(output.props.children).toBe('Showing 0 of 0');
    });
  });
});

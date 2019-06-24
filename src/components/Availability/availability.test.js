import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import Availability from './index';


const setup = (propOverrides) => {
  const renderer = createRenderer();
  renderer.render(<Availability />);
  const output = renderer.getRenderOutput();
  return output;
};

const output = setup();

describe('components', () => {
  describe('Availability', () => {
    it('should render and have <div>', () => {
      expect(output.type).toBe('div');
      expect(output.props.className).toBe('make-container');
    });

    it('should render and have <div>', () => {
      const firstChild = output.props.children;
      expect(firstChild.type).toBe('p');
      expect(firstChild.props.children[0]).toBe('Model: ');
      expect(firstChild.props.children[1]).toBe('testAvailability');
    });
  });
});

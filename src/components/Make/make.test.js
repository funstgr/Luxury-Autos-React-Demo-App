import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import Make from './index';


const setup = (propOverrides) => {
  const renderer = createRenderer();
  renderer.render(<Make />);
  const output = renderer.getRenderOutput();
  return output;
};

const output = setup();

describe('components', () => {
  describe('Make', () => {
    it('should render and have <div>', () => {
      expect(output.type).toBe('div');
      expect(output.props.className).toBe('make-container');
    });

    it('should render and have <div>', () => {
      const firstChild = output.props.children;
      expect(firstChild.type).toBe('p');
      expect(firstChild.props.children[0]).toBe('Make: ');
      expect(firstChild.props.children[1]).toBe('testMake');
    });
  });
});

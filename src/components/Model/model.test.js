import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import Model from './index';


const setup = (propOverrides) => {
  const renderer = createRenderer();
  renderer.render(<Model />);
  const output = renderer.getRenderOutput();
  return output;
};

const output = setup();

describe('components', () => {
  describe('Model', () => {
    it('should render and have <div>', () => {
      expect(output.type).toBe('div');
      expect(output.props.className).toBe('model-container');
    });

    it('should render and have <div>', () => {
      const firstChild = output.props.children;
      expect(firstChild.type).toBe('p');
      expect(firstChild.props.children[0]).toBe('Model: ');
      expect(firstChild.props.children[1]).toBe('testModel');
    });
  });
});

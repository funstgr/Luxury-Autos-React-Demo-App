import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import Content from './index';
import InnerContent from '../InnerContent';


const setup = (propOverrides) => {
  const renderer = createRenderer();
  renderer.render(<Content />);
  const output = renderer.getRenderOutput();
  return output;
};

const output = setup();

describe('components', () => {
  describe('Content', () => {
    it('should have class app-container', () => {
      const className = 'app-container';
      expect(output.props.className).toBe(className);
    });
  });
});

describe('components', () => {
  describe('InnerContent', () => {
    it('should render', () => {
      const innerContent = output.props.children;
      expect(innerContent.type).toBe(InnerContent);
    });
  });
});

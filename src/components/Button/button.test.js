import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import Button from './index';


const setup = (propOverrides) => {
  const renderer = createRenderer();
  renderer.render(<Button />);
  const output = renderer.getRenderOutput();
  return output;
};

const output = setup();

describe('components', () => {
  describe('Header', () => {
    it('should render and have <header>', () => {
      expect(output.type).toBe('button');
      const propKeys = Object.keys(output.props);

      // test prop keys are present
      expect(propKeys.includes('className')).toBe(true);
      expect(propKeys.includes('onClick')).toBe(true);
    });
  });
});

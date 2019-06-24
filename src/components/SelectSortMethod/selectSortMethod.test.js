import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import SelectSortMethod from './index';


const setup = (propOverrides) => {
  const renderer = createRenderer();
  renderer.render(<SelectSortMethod />);
  const output = renderer.getRenderOutput();
  return output;
};

describe('components', () => {
  describe('SelectSortMethod', () => {
    it('should render and be <select>', () => {
      const output = setup();
      expect(output.type).toBe('select');
      const keys = Object.keys(output.props);
      expect(keys.includes('onChange')).toBe(true);
    });
  });
});

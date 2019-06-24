import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import CarImage from './index';


const setup = (propOverrides) => {
  const renderer = createRenderer();
  renderer.render(<CarImage />);
  const output = renderer.getRenderOutput();
  return output;
};

describe('components', () => {
  describe('CarImage', () => {
    it('should render div element with class and style', () => {
      const output = setup();
      expect(output.type).toBe('div');
      expect(output.props.className).toBe('car-img');
      expect(output.props.style.background).toBe('url(testUrl) center / cover');
    });
  });
});

import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import CarList from './index';
import CarListHeader from './CarListHeader';

const setup = (propOverrides) => {
  const renderer = createRenderer();
  renderer.render(<CarList />);
  const output = renderer.getRenderOutput();
  return output;
};

const output = setup();

describe('components', () => {
  describe('CarList container element is a div', () => {
    it('should be type <CarListHeader>', () => {
      expect(output.type).toBe('div');
    });

    it('CarCard firstChild should be type CarListHeader', () => {
      const firstChild = output.props.children[0];
      expect(firstChild.type).toBe(CarListHeader);
      expect(firstChild.props.dataLength).toBe(0);
      expect(firstChild.props.limit).toBe(0);
    });

    it('CarCard secondChild should be type <ul>', () => {
      const secondChild = output.props.children[1];
      expect(secondChild.type).toBe('ul');
      expect(secondChild.props.className).toBe('car-list');
    });
  });
});

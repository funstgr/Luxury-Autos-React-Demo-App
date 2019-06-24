import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import CarCard from './index';
import CarImage from './CarImage';
import CarInfo from '../../containers/CarInfo';

const setup = (propOverrides) => {
  const renderer = createRenderer();
  renderer.render(<CarCard />);
  const output = renderer.getRenderOutput();
  return output;
};

const output = setup();

describe('components', () => {
  describe('CarCard', () => {
    it('should render and be type <li>', () => {
      expect(output.type).toBe('li');
      expect(output.props.className).toBe('car');
    });

    it('CarCard firstChild should render and be type <CarImage>', () => {
      const firstChild = output.props.children[0];
      expect(firstChild.type).toBe(CarImage);

      // inspect injected property keys are present
      const firstChildKeys = Object.keys(firstChild.props);
      expect(firstChildKeys.includes('data')).toBe(true);
      expect(firstChildKeys.includes('availability')).toBe(true);
    });

    it('CarCard secondChild should render and be type <div>', () => {
      const secondChild = output.props.children[1];
      expect(secondChild.type).toBe('div');
      expect(secondChild.props.className).toBe('car-info-container');

      // test container for CarInfo
      expect(secondChild.props.children.type).toBe(CarInfo);
      // inspect injected property keys are present
      const carInfoKeys = Object.keys(secondChild.props.children.props);
      expect(carInfoKeys.includes('data')).toBe(true);
      expect(carInfoKeys.includes('availability')).toBe(true);
    });
  });
});

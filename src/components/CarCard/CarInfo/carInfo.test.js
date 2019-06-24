import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import CarInfo from './index';
import CarName from '../../CarName';
import Make from '../../Make';
import Model from '../../Model';
import Availability from '../../Availability';
import Ratings from './Ratings';
import Button from '../../Button';

const setup = (propOverrides) => {
  const renderer = createRenderer();
  renderer.render(<CarInfo />);
  const output = renderer.getRenderOutput();
  return output;
};

const output = setup();

describe('components', () => {
  describe('CarInfo test all child elements and classes with a shallow render', () => {
    it('should be type <div> and className car-container', () => {
      expect(output.type).toBe('div');
      expect(output.props.className).toBe('car-container');
    });

    it('CarInfo firstChild should be type <CarName>', () => {
      const firstChild = output.props.children[0];
      expect(firstChild.type).toBe(CarName);
      const propKeys = Object.keys(firstChild.props);

      // test prop keys are present
      expect(propKeys.includes('data')).toBe(true);
    });

    it('CarInfo secondChild should be type <Make>', () => {
      const secondChild = output.props.children[1];
      expect(secondChild.type).toBe(Make);
      const propKeys = Object.keys(secondChild.props);

      // test prop keys are present
      expect(propKeys.includes('data')).toBe(true);
    });

    it('CarInfo thirdChild should be type <Model>', () => {
      const thirdChild = output.props.children[2];
      expect(thirdChild.type).toBe(Model);
      const propKeys = Object.keys(thirdChild.props);

      // test prop keys are present
      expect(propKeys.includes('data')).toBe(true);
    });

    it('CarInfo forthChild should be type <p>', () => {
      const forthChild = output.props.children[3];
      expect(forthChild.type).toBe(Availability);
      const propKeys = Object.keys(forthChild.props);

      // test prop keys are present
      expect(propKeys.includes('data')).toBe(true);
      expect(propKeys.includes('availability')).toBe(true);
    });

    it('CarInfo fifthChild should be type <div>', () => {
      const fifthChild = output.props.children[4];
      expect(fifthChild.type).toBe(Ratings);
      const propKeys = Object.keys(fifthChild.props);

      // test prop keys are present
      expect(propKeys.includes('data')).toBe(true);
    });

    it('CarInfo sixthChild should be type <p>', () => {
      const sixthChild = output.props.children[5];
      expect(sixthChild.type).toBe('p');
      expect(sixthChild.props.className).toBe('addToCart_btn');
    });
  });
});

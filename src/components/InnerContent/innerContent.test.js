import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import InnerContent from './index';
import SelectorLabel from './SelectorLabel';

import SelectSortMethod from '../../containers/SelectSortMethod';
import CarList from '../../containers/CarList';


const setup = (propOverrides) => {
  const renderer = createRenderer();
  renderer.render(<InnerContent />);
  const output = renderer.getRenderOutput();
  return output;
};

const output = setup();

describe('components', () => {
  describe('InnerContent', () => {
    it('should render InnerContent and be  <div>', () => {
      expect(output.type).toBe('div');
    });
  });
});

describe('components', () => {
  describe('SelectorLabel', () => {
    it('should render', () => {
      const firstElement = output.props.children[0];
      expect(firstElement.type).toBe(SelectorLabel);
    });
  });
});

describe('components', () => {
  describe('SelectSortMethod', () => {
    it('should render', () => {
      const secondElement = output.props.children[1];
      expect(secondElement.type).toBe(SelectSortMethod);
      expect(secondElement.props.children.length).toBe(2);

      // test options for select
      expect(secondElement.props.children[0].type).toBe('option');
      const optionKey1 = Object.keys(secondElement.props.children[0].props);
      expect(optionKey1.includes('value')).toBe(true);

      expect(secondElement.props.children[1].type).toBe('option');
      const optionKey2 = Object.keys(secondElement.props.children[1].props);
      expect(optionKey2.includes('value')).toBe(true);
    });
  });
});

describe('container', () => {
  describe('CarList', () => {
    it('should render', () => {
      const thirdElement = output.props.children[2];
      expect(thirdElement.type).toBe(CarList);
    });
  });
});

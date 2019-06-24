import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import Header from './index';


const setup = (propOverrides) => {
  const renderer = createRenderer();
  renderer.render(<Header />);
  const output = renderer.getRenderOutput();
  return output;
};

const output = setup();

describe('components', () => {
  describe('Header', () => {
    it('should render and have <header>', () => {
      expect(output.type).toBe('header');
    });

    it('should render <Link> element as first child and content', () => {
      const firstElement = output.props.children[0];
      expect(firstElement.type).toBe(Link);
      expect(firstElement.props.className).toBe('home_link');
      expect(firstElement.props.to).toBe('/');
      expect(firstElement.props.children.type).toBe('h1');
      expect(firstElement.props.children.props.children).toBe('LuxuryAutos.ca');
    });

    it('should render <Link> as second child with className and content', () => {
      const secondElement = output.props.children[1];
      expect(secondElement.type).toBe(Link);
      expect(secondElement.props.className).toBe('cart_link');
      expect(secondElement.props.to).toBe('/cart');
      expect(secondElement.props.children.type).toBe('div');
      expect(secondElement.props.children.props.className).toBe('cart');
      expect(secondElement.props.children.props.children).toBe('Cart Items(0)');
    });
  });
});

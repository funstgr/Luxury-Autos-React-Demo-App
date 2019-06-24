import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import { createRenderer } from 'react-test-renderer/shallow';
import App from './index';
import Header from '../../containers/Header';
import Content from '../Content';

const setup = (propOverrides) => {
  const renderer = createRenderer();
  renderer.render(<App />);
  const output = renderer.getRenderOutput();
  return output;
};


const output = setup();

describe('App', () => {
  describe('should render App', () => {
    it('should render <div> element', () => {
      expect(output.type).toBe('div');
      expect(output.props.className).toBe('appDiv');
    });
  });
});

describe('components', () => {
  describe('first child Header', () => {
    it('should render <Header>', () => {
      const header = output.props.children[0];
      expect(header.type).toBe(Header);
    });
  });
});

describe('components', () => {
  describe('second child Switch', () => {
    it('should render <Switch> and have 2 <Route> nodes', () => {
      const secondChild = output.props.children[1];
      expect(secondChild.type).toBe(Switch);
      const switchChildren = secondChild.props.children;
      expect(switchChildren[0].type).toBe(Route);
      expect(switchChildren[0].props.path).toBe('/');
      expect(switchChildren[1].type).toBe(Route);
      expect(switchChildren[1].props.path).toBe('/cart');
    });
  });
});

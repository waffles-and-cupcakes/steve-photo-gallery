import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import App from './App.jsx';

configure({adapter: new Adapter() });

test('App should render correctly', () => {
  const output = shallow(<App />);
  expect(shallowToJson(output)).toMatchSnapshot();
});

test('toggleModal should toggle isOpen', () => {
  const output = shallow(<App />);
  const btn = output.find('div').get(1);
  btn.props.onClick();
  expect(output.state().isOpen).toBe(true);  
});
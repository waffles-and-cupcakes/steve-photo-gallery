import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Modal from './Modal.jsx';

configure({adapter: new Adapter() });

test('Modal should render correctly', () => {
  const output = shallow(<Modal />);
  expect(shallowToJson(output)).toMatchSnapshot();
});

test('Modal should return null when not open', () => {
  const output = shallow(<Modal open={false} />);
  expect(output.get(0)).toBe(null);
});
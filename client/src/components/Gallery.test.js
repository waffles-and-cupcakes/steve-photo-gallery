import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Gallery from './Gallery.jsx';

configure({adapter: new Adapter() });

test('Gallery should render correctly', () => {
  const output = shallow(<Gallery />);
  expect(shallowToJson(output)).toMatchSnapshot();
});
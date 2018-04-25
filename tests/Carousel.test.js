import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Carousel from './Carousel.jsx';

configure({adapter: new Adapter() });

const photos = [
  {
    title: 'A photo',
    isVerified: false,
    photoUrl: 'www.example.com/photo',
    thumbnailUrl: 'www.example.com/thumbnail',
    listingId: 1,
  },
  {
    title: 'Another photo',
    isVerified: true,
    photoUrl: 'www.example.com/photo',
    thumbnailUrl: 'www.example.com/thumbnail',
    listingId: 1,
  }
];

test('Carousel should render correctly', () => {
  const output = shallow(<Carousel photos={photos} />);
  expect(shallowToJson(output)).toMatchSnapshot();
});

test('Carousel should keep track of the current image index', () => {
  const output = shallow(<Carousel photos={photos} />);
  output.instance().setCurrentImageIndex(1);
  expect(output.state().currentImageIndex).toBe(1);
});
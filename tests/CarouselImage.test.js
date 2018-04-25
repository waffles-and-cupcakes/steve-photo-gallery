import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import CarouselImage from './CarouselImage.jsx';

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

test('CarouselImage should render correctly', () => {
  const output = shallow(<CarouselImage photos={photos} />);
  expect(shallowToJson(output)).toMatchSnapshot();
});
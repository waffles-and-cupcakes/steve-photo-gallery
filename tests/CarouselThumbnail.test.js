import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import CarouselThumbnail from '../client/src/components/CarouselThumbnail.jsx';

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

test('CarouselThumbnail should render correctly', () => {
  const output = shallow(<CarouselThumbnail photos={photos} />);
  expect(shallowToJson(output)).toMatchSnapshot();
});

test('CarouselThumbnail should render the number of slides based on windowWidth', () => {
  let output = shallow(<CarouselThumbnail photos={photos} windowWidth={300} />);
  expect(output.get(0).props.slidesToShow).toBe(1);

  output = shallow(<CarouselThumbnail photos={photos} windowWidth={700} />);
  expect(output.get(0).props.slidesToShow).toBe(3);

  output = shallow(<CarouselThumbnail photos={photos} windowWidth={900} />);
  expect(output.get(0).props.slidesToShow).toBe(5);

  output = shallow(<CarouselThumbnail photos={photos} windowWidth={1100} />);
  expect(output.get(0).props.slidesToShow).toBe(6);

  output = shallow(<CarouselThumbnail photos={photos} windowWidth={1400} />);
  expect(output.get(0).props.slidesToShow).toBe(7);

  output = shallow(<CarouselThumbnail photos={photos} windowWidth={1600} />);
  expect(output.get(0).props.slidesToShow).toBe(9);
});
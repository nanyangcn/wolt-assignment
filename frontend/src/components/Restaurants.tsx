import { RestaurantType } from '../types';
import Slider from 'react-slick';
import React from 'react';

import Restaurant from './Restaurant';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slick-arrow.css';

interface Props {
  lists: RestaurantType[];
}

const Restaurants: React.FC<Props> = ({ lists }: Props) => {
  if (!lists)
    return null;

  const listsNum = lists.length < 5 ? lists.length : 5;
  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: listsNum,
    slidesToScroll: 1,
    swipeToSlide: true
  };

  const listsStyle = {
    width: `${20 * listsNum}%`,
    margin: 'auto',
  };

  return (
    <div style={listsStyle}>
      <Slider {...settings}>
        {lists.map((list, i: number) => <Restaurant list={list} key={i}/>)}
      </Slider>
    </div>
  );
};

export default Restaurants;
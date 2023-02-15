import React from 'react';
import styled from './HeroItem.module.scss';
import { Link } from 'react-scroll';
export interface IHeroItemProps {
  slider: {
    title: string;
    text: string;
  };
}

const HeroItem: React.FC<IHeroItemProps> = ({ slider }) => {
  return (
    <div className={styled.swiperItem}>
      <h1> {slider.title}</h1>
      <p>{slider.text}</p>

      <Link to={'contact'} className={styled.buttonLink}>
        Contact Us
      </Link>
    </div>
  );
};

export  {HeroItem};

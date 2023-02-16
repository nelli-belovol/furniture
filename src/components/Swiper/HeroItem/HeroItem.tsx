import React from 'react';
import styled from './HeroItem.module.scss';
import { Link } from 'react-scroll';
import { IHeroSlider } from '../types';
export interface IHeroItemProps {
  slider: IHeroSlider;
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

export { HeroItem };

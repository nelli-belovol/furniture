import React from 'react';
import { furnitures } from '../../utils/furnitures';
import {FurnitureItem} from './FurnitureItem';
import styled from './Furnitures.module.scss';

const Furnitures = () => {
  return (
    <section className={styled.furnitures} id="shop">
      <div className={`container ${styled.furnituresWrap}`}>
        <div className={styled.textWrap}>
          <h2>Our furnitures</h2>
          <p>There are many variations of passages of Lorem Ipsum</p>
        </div>
        <ul className={styled.furnitureList}>
          {furnitures.map(furniture => (
            <FurnitureItem furniture={furniture} key={furniture.id} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export {Furnitures};

import React from 'react';
import { FaSearch } from 'react-icons/fa';

import styled from './FurnitureItem.module.scss';

interface IProps {
  furniture: {
    image: string;
    id: number;
    text: string;
    title: string;
  };
}

const FurnitureItem: React.FC<IProps> = ({ furniture }) => {
  return (
    <li className={styled.furnitureItem}>
      <div className={styled.imageWrap}>
        <img src={furniture.image} alt={`img ${furniture.id}`} />
        <div className={styled.overlay}>
          <div>
            <FaSearch />
          </div>
        </div>
      </div>
      <h4>{furniture.title}</h4>
      <p>{furniture.text}</p>
    </li>
  );
};

export {FurnitureItem};

import React from 'react';
import styled from './Comment.module.scss';

import { IoMdQuote } from 'react-icons/io';

interface IProps {
  comment: { title: string; text: string; image: string; id: number | string };
}

const Comment: React.FC<IProps> = ({ comment }) => {
  return (
    <div className={styled.container}>
      <div className={styled.image}>
        <img src={comment.image} alt={`img ${comment.image}`} />
        <div className={styled.icon}>
          <IoMdQuote />
        </div>
      </div>
      <div className={styled.textWrap}>
        <h3>{comment.title}</h3>
        <p>{comment.text}</p>
      </div>
    </div>
  );
};

export default Comment;

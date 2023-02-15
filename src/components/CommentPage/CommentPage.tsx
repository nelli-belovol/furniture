import React from 'react';
import {Comment} from './Comment';
import styled from './CommentPage.module.scss';

interface IProps {
  commentsPair: {
    title: string;
    text: string;
    image: string;
    id: number | string;
  }[];
}

const CommentPage: React.FC<IProps> = ({ commentsPair }) => {
  return (
    <div className={styled.pairWrap}>
      {commentsPair.map(comment => (
        <Comment comment={comment} key={comment.id} />
      ))}
    </div>
  );
};

export  {CommentPage};

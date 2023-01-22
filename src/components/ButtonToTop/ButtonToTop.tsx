import React from 'react';
import { useEffect, useState } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';
import styled from './ButtonToTop.module.scss';

const ButtonToTop = () => {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setBackToTop(true);
      } else setBackToTop(false);
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <>
      {backToTop && (
        <div className={styled.topButton} onClick={scrollUp}>
          <AiOutlineArrowUp />
        </div>
      )}
    </>
  );
};

export default ButtonToTop;

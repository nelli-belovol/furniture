import { useEffect, useState } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';
import styled from './ButtonToTop.module.scss';

const ButtonToTop = () => {
  const [backToTop, setBackToTop] = useState(false);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const changeVisibilityButton = () =>
    window.scrollY > 100 ? setBackToTop(true) : setBackToTop(false);

  useEffect(() => {
    window.addEventListener('scroll', changeVisibilityButton);
    return () => window.removeEventListener('scroll', changeVisibilityButton);
  }, []);

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

export { ButtonToTop };

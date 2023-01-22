import React from 'react';
import { images } from '../../assets/images';
import styled from './AboutUs.module.scss';

const AboutUs = () => {
  return (
    <section className={styled.aboutSection} id="about">
      <div className={`container ${styled.aboutWrap}`}>
        <article className={styled.textWrap}>
          <h2>About Us</h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believableThere are many variations of passages of Lorem Ipsum
            available, but the majority have able
          </p>
          <button>Read more</button>
        </article>
        <img src={images.image1} alt="image1" />
      </div>
    </section>
  );
};

export default AboutUs;

import React from 'react';
import { images } from 'assets/images';
import ContactForm from '../Form/ContactForm';
import styled from './ContactUs.module.scss';

const ContactUs = () => {
  return (
    <section className={styled.contactUsSection} id="contact">
      <div className={`container ${styled.contactContainer}`}>
        <ContactForm />
        <div className={styled.image}>
          <img src={images.image9} alt="shelves" />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

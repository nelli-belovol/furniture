import React from 'react';
import { services } from '../../utils/services';
import {ServiceItem} from './ServiceItem/';
import styled from './Services.module.scss';

const Services = () => {
  return (
    <section className={styled.servicesSection} id="services">
      <div className="container">
        <div className="flexColumn">
          <h2>Our Services</h2>
          <p>There are many variations of passages of Lorem Ipsum</p>
          <ul className={styled.servicesList}>
            {services.map(service => {
              const { id, name, text, image } = service;
              return (
                <ServiceItem key={id} image={image} text={text} name={name} />
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export  {Services};

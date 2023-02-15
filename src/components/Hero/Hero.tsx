import {Header} from '../Header';
import Swiper from '../Swiper/Swiper';
import { heroSliders } from '../../utils/heroSliders';
import { useState } from 'react';
import styled from './Hero.module.scss';
import { Modal } from 'components/Modal';
import { Login } from 'components/Login';


const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className={styled.heroSection}>
      {isModalOpen && (
        <Modal closeModal={() => closeModal()}>
          <Login />
        </Modal>
      )}
      <div className={styled.heroWrap} id="home">
        <Header openModal={() => openModal()} />
        <Swiper items={heroSliders} name="heroSliders" />
      </div>
    </section>
  );
};

export  {Hero};

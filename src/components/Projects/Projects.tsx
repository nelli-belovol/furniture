import React from 'react';
import { projects } from '../../utils/projects';

import Swiper from '../Swiper/Swiper';
import styled from './Projects.module.scss';

const Projects = () => {
  return (
    <div className={styled.container}>
      <h2>Our Projects</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
        dolorum..
      </p>

      <Swiper items={projects} name="projects" />
    </div>
  );
};

export default Projects;

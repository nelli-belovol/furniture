import { ProjectItem } from 'components/Swiper/ProjectSlide/ProjectItem';
import React from 'react';

import styled from './ProjectSlide.module.scss';

interface IProps {
  projects: any;
}

const ProjectSlide: React.FC<IProps> = ({ projects }) => {
  return (
    <ul className={styled.projectSlideList}>
      {projects.map((item: { id: any; title: string; image: string }) => (
        <ProjectItem project={item} key={item.id} />
      ))}
    </ul>
  );
};

export { ProjectSlide };

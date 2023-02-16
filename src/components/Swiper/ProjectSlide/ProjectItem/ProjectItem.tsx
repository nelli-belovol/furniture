import React from 'react';
import styled from './ProjectItem.module.scss';

export interface IProjectItemProp {
  project: {
    title: string;
    image: string;
    id: number | string;
  };
}

const ProjectItem: React.FC<IProjectItemProp> = ({ project }) => {
  return (
    <li className={styled.projectWrap} key={project.id}>
      <img
        className={styled.projectImg}
        src={project.image}
        alt={`img ${project.id}`}
        key={project.id}
      />
      <h3 className={styled.projectTitle}>{project.title}</h3>
      <div className={styled.overlay}>
        <button className={styled.buttonMore}>View more</button>
      </div>
    </li>
  );
};

export  {ProjectItem};

import { comments } from '../../utils/comments';
import Swiper from '../Swiper/Swiper';
import styled from './Clients.module.scss';

const Clients = () => {
  const size = 2;
  const subarray = [];
  for (let i = 0; i < Math.ceil(comments.length / size); i++) {
    subarray[i] = comments.slice(i * size, i * size + size);
  }

  return (
    <div className={styled.container}>
      <div className={styled.textWrap}>
        <h2>WHAT IS SAYS OUR CLIENTS</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
      </div>

      <Swiper items={comments} name="comments" />
    </div>
  );
};

export { Clients };

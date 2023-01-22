import { FC } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import styled from './Modal.module.scss';

interface IProps {
  children: React.ReactNode;
  closeModal: () => void;
}

const Modal: FC<IProps> = ({ children, closeModal }) => {
  return (
    <div className={styled.backdrop}>
      <div className={styled.modalContent}>
        <div onClick={() => closeModal()} className={styled.closeBtn}>
          <AiOutlineClose />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;

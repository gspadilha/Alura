import React, { ReactElement, ReactNode } from 'react';

import { ModalContainer } from './styles';

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: (props: any) => JSX.Element;
}

const Modal = ({ isOpen, onClose, children }: IModalProps) => {
  const onCloseModal = (event: any) => {
    const isSafeArea = event.target.closest('[data-modal-safe-area="true"]');

    if (!isSafeArea) {
      onClose();
    }
  };

  return (
    <ModalContainer isOpen={isOpen} onClick={event => onCloseModal(event)}>
      {children({
        'data-modal-safe-area': 'true',
      })}
    </ModalContainer>
  );
};

export default Modal;

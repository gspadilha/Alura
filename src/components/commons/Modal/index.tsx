import React from 'react';
import { motion } from 'framer-motion';
import { IoMdClose } from 'react-icons/io';

import { ModalContainer, ModalContent } from './styles';

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
      <ModalContent
        animate={isOpen ? 'open' : 'closed'}
        transition={{ duration: 0.3 }}
        variants={{
          open: {
            x: '0%',
          },
          closed: {
            x: '100%',
          },
        }}
      >
        {children({
          'data-modal-safe-area': 'true',
        })}
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;

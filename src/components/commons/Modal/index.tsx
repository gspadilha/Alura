import React from 'react';
import { motion } from 'framer-motion';

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
      <motion.div
        animate={isOpen ? 'open' : 'closed'}
        transition={{ duration: 0.5 }}
        variants={{
          open: {
            x: '0%',
          },
          closed: {
            x: '-100%',
          },
        }}
      >
        {children({
          'data-modal-safe-area': 'true',
        })}
      </motion.div>
    </ModalContainer>
  );
};

export default Modal;

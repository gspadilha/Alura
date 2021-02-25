import styled from 'styled-components';
import { getLodash } from '../../theme/utils/getLodash';

interface IModalContainerProps {
  isOpen: boolean;
}

export const ModalContainer = styled.div<IModalContainerProps>`
  color: ${({ theme }) =>
    getLodash(theme, `colors.tertiary.${theme.mode}.color`)};

  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  pointer-events: ${({ isOpen }) => (isOpen ? 'all' : 'none')};
  transition: opacity 0.2s;

  display: flex;
  flex-direction: column;
  align-items: stretch;

  background: rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  overflow: auto;

  z-index: 100;

  > div {
    display: flex;
    flex: 1;
  }
`;

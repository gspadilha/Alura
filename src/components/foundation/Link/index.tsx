import React, { HTMLAttributes } from 'react';
import { LinkBase } from './styles';

interface ITextProps {
  variant: string;
  href: string;
  children?: React.ReactNode;
}

const Link: React.FC<ITextProps> = ({ variant, href, children }) => {
  return (
    <LinkBase variant={variant} href={href}>
      {children}
    </LinkBase>
  );
};

export default Link;

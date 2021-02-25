import React from 'react';
import { TextBase } from './styles';

interface ITextProps {
  tag?: 'p' | 'span' | 'h1' | undefined;
  variant: string;
  textAlign?: string | object;
  marginBottom?: string | object;
  color?: string | object;
  children: string | number | React.ReactNode;
}

const Text: React.FC<ITextProps> = ({
  tag,
  variant,
  color,
  textAlign,
  children,
}) => {
  const finalTag = tag === undefined ? 'span' : tag;

  return (
    <TextBase
      as={finalTag}
      colorVariant={color}
      variant={variant}
      textAlign={textAlign}
    >
      {children}
    </TextBase>
  );
};

export default Text;

import React, { HTMLAttributes } from "react";
import PropTypes, { ReactElementLike, ReactNodeArray } from "prop-types";
import { TextBase } from "./styles";

interface ITextProps extends HTMLAttributes<HTMLElement> {
  tag: string;
  variant: string;
  children: string | number | boolean | {} | ReactElementLike | ReactNodeArray;
}

const Text: React.FC<ITextProps> = ({ tag, variant, children, ...props }) => {
  return (
    <TextBase as={tag} variant={variant} {...props}>
      {children}
    </TextBase>
  );
};

Text.propTypes = {
  tag: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

Text.defaultProps = {
  tag: "span",
  variant: "paragraph1",
};

export default Text;

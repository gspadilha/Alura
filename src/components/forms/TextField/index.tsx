import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
  margin-bottom: 17px;
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.tertiary.light.color};
  padding: 12px 16px;
  outline: 0;
  border-radius: ${({ theme }) => theme.borderRadius};
  margin-top: 5px;
`;

interface ITextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  name: string;
  onChange: (event: any) => void;
  value: string;
}

const TextField: React.FC<ITextFieldProps> = ({
  placeholder,
  name,
  onChange,
  value,
  ...anotherProps
}: ITextFieldProps) => {
  return (
    <InputWrapper>
      <label htmlFor={name}>
        {placeholder}:
        <Input
          placeholder={placeholder}
          name={name}
          onChange={onChange}
          value={value}
          {...anotherProps}
        />
      </label>
    </InputWrapper>
  );
};

export default TextField;

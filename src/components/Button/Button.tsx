import React from "react";
import * as S from './Button.styles';

type TButton = {
  text: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  disabled?: boolean;
  onClick?: () => void;
};

export default function Button({ text, type, disabled, onClick, ...props }: TButton) {
  return (
    <S.Button type={type} disabled={disabled} onClick={onClick} {...props}>
      {text}
    </S.Button>
  );
}
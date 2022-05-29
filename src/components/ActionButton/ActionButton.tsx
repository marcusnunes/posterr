import React from 'react';
import * as S from './ActionButton.styles';

type ActionButton = {
  icon: JSX.Element,
  text?: string;
  action: () => void;
}

export default function ActionButton({ icon, text, action }: ActionButton) {
  return (
    <S.Button onClick={action}>
      {icon}
      {text && (
        <span>{text}</span>
      )}
    </S.Button>
  );
}
